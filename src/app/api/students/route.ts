import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const createStudentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.string().transform(val => new Date(val)),
  grade: z.string().optional(),
  teacher: z.string().optional(),
  school: z.string().optional(),
  parentName: z.string().optional(),
  parentEmail: z.string().email().optional().or(z.literal('')),
  parentPhone: z.string().optional(),
  generalNotes: z.string().optional(),
})

// GET /api/students - List all students
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const isActive = searchParams.get('isActive') !== 'false'

    const students = await prisma.student.findMany({
      where: {
        isActive,
        ...(search && {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { teacher: { contains: search, mode: 'insensitive' } },
            { school: { contains: search, mode: 'insensitive' } },
          ]
        })
      },
      include: {
        goals: {
          where: { status: 'ACTIVE' },
          select: { id: true }
        },
        sessions: {
          where: {
            status: 'COMPLETED',
            startTime: {
              gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
            }
          },
          select: { id: true }
        }
      },
      orderBy: [
        { lastName: 'asc' },
        { firstName: 'asc' }
      ]
    })

    const studentsWithCounts = students.map(student => ({
      ...student,
      goalCount: student.goals.length,
      recentSessionCount: student.sessions.length,
      goals: undefined,
      sessions: undefined,
    }))

    return NextResponse.json(studentsWithCounts)
  } catch (error) {
    console.error('Error fetching students:', error)
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    )
  }
}

// POST /api/students - Create a new student
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = createStudentSchema.parse(body)
    
    // For now, we'll use a default user ID. In a real app, this would come from authentication
    const defaultUserId = 'temp-user-id'
    
    // Create user if it doesn't exist (temporary for development)
    await prisma.user.upsert({
      where: { id: defaultUserId },
      update: {},
      create: {
        id: defaultUserId,
        email: 'demo@slpstudio.com',
        name: 'Demo SLP',
        role: 'SLP'
      }
    })

    const student = await prisma.student.create({
      data: {
        ...validatedData,
        userId: defaultUserId,
      },
      include: {
        goals: {
          where: { status: 'ACTIVE' },
          select: { id: true }
        }
      }
    })

    return NextResponse.json({
      ...student,
      goalCount: student.goals.length,
      goals: undefined,
    }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Error creating student:', error)
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
}