import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const updateStudentSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  dateOfBirth: z.string().transform(val => new Date(val)).optional(),
  grade: z.string().optional(),
  teacher: z.string().optional(),
  school: z.string().optional(),
  parentName: z.string().optional(),
  parentEmail: z.string().email().optional().or(z.literal('')),
  parentPhone: z.string().optional(),
  generalNotes: z.string().optional(),
  isActive: z.boolean().optional(),
})

// GET /api/students/[id] - Get student by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const student = await prisma.student.findUnique({
      where: { id: params.id },
      include: {
        goals: {
          include: {
            progress: {
              orderBy: { recordedAt: 'desc' },
              take: 1
            }
          },
          orderBy: { createdAt: 'desc' }
        },
        sessions: {
          orderBy: { startTime: 'desc' },
          take: 10,
          include: {
            detailedNotes: {
              select: {
                id: true,
                title: true,
                content: true,
                noteType: true,
                createdAt: true
              }
            }
          }
        },
        sessionNotes: {
          orderBy: { createdAt: 'desc' },
          take: 10,
          include: {
            session: {
              select: {
                id: true,
                startTime: true,
                sessionType: true
              }
            }
          }
        }
      }
    })

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(student)
  } catch (error) {
    console.error('Error fetching student:', error)
    return NextResponse.json(
      { error: 'Failed to fetch student' },
      { status: 500 }
    )
  }
}

// PUT /api/students/[id] - Update student
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const validatedData = updateStudentSchema.parse(body)

    const student = await prisma.student.update({
      where: { id: params.id },
      data: validatedData,
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
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Error updating student:', error)
    return NextResponse.json(
      { error: 'Failed to update student' },
      { status: 500 }
    )
  }
}

// DELETE /api/students/[id] - Soft delete student
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const student = await prisma.student.update({
      where: { id: params.id },
      data: { isActive: false }
    })

    return NextResponse.json({ message: 'Student deactivated successfully' })
  } catch (error) {
    console.error('Error deactivating student:', error)
    return NextResponse.json(
      { error: 'Failed to deactivate student' },
      { status: 500 }
    )
  }
}