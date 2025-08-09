import Card, { CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import EmptyState from '@/components/ui/EmptyState'
import { 
  MagnifyingGlassIcon,
  UserGroupIcon,
  PlusIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// Mock data for now
const mockStudents = [
  {
    id: '1',
    name: 'Emma Thompson',
    grade: '3rd Grade',
    teacher: 'Mrs. Johnson',
    goals: 8,
    lastSession: '2024-01-08',
    initials: 'ET'
  },
  {
    id: '2', 
    name: 'Marcus Johnson',
    grade: '1st Grade',
    teacher: 'Ms. Davis',
    goals: 6,
    lastSession: '2024-01-07',
    initials: 'MJ'
  },
  {
    id: '3',
    name: 'Sophie Chen',
    grade: '2nd Grade', 
    teacher: 'Mr. Wilson',
    goals: 4,
    lastSession: '2024-01-05',
    initials: 'SC'
  },
]

export default function StudentsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container-center space-y-8">
        {/* Header */}
        <div className="stripe-bg p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-ink-800 mb-2">
                Students
              </h1>
              <p className="text-sage-600">
                Manage your student caseload and track their progress
              </p>
            </div>
            <Link href="/students/new">
              <Button className="flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>Add Student</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Search & Filters */}
        <Card>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400" />
                <Input 
                  placeholder="Search students..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="flex items-center space-x-2">
                <FunnelIcon className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Students Grid */}
        {mockStudents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStudents.map((student) => (
              <Link key={student.id} href={`/students/${student.id}`}>
                <Card hover className="cursor-pointer">
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-serif font-semibold text-pink-600">
                          {student.initials}
                        </span>
                      </div>
                      
                      {/* Student Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-semibold text-ink-800 text-lg mb-1">
                          {student.name}
                        </h3>
                        
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-sage-100 text-sage-700 px-2 py-1 rounded-lg text-xs font-medium">
                              {student.grade}
                            </span>
                            <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-lg text-xs font-medium">
                              {student.teacher}
                            </span>
                          </div>
                          
                          <div className="text-sm text-sage-600">
                            <p>{student.goals} active goals</p>
                            <p>Last session: {new Date(student.lastSession).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<UserGroupIcon className="w-12 h-12 text-sage-400" />}
            title="No students yet"
            description="Add your first student to start building your caseload."
            action={{
              label: "Add Student",
              onClick: () => {
                // This would normally navigate to /students/new
                console.log('Navigate to add student')
              }
            }}
          />
        )}

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-ink-800 mb-1">
                {mockStudents.length}
              </div>
              <div className="text-sm text-sage-600">Total Students</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-ink-800 mb-1">
                {mockStudents.reduce((acc, student) => acc + student.goals, 0)}
              </div>
              <div className="text-sm text-sage-600">Active Goals</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-ink-800 mb-1">
                85%
              </div>
              <div className="text-sm text-sage-600">Average Progress</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}