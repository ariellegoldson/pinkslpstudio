import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { 
  ArrowLeftIcon,
  CalendarIcon,
  DocumentTextIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// Mock data for the student
const mockStudent = {
  id: '1',
  name: 'Emma Thompson',
  grade: '3rd Grade',
  teacher: 'Mrs. Johnson',
  dateOfBirth: '2016-03-15',
  startDate: '2023-09-01',
  initials: 'ET'
}

const mockGoals = [
  {
    id: '1',
    area: 'Articulation',
    description: 'Produce /r/ sound in initial position with 80% accuracy',
    currentProgress: 75,
    targetDate: '2024-03-15',
    status: 'In Progress'
  },
  {
    id: '2', 
    area: 'Language',
    description: 'Use age-appropriate vocabulary in conversational speech',
    currentProgress: 90,
    targetDate: '2024-02-28',
    status: 'Near Mastery'
  },
  {
    id: '3',
    area: 'Social Communication',
    description: 'Maintain eye contact during conversations for 3+ exchanges',
    currentProgress: 60,
    targetDate: '2024-04-30',
    status: 'In Progress'
  }
]

const mockNotes = [
  {
    id: '1',
    date: '2024-01-08',
    type: 'Session Note',
    content: 'Great progress on /r/ sounds in initial position. Emma showed 80% accuracy today using picture cards and enjoyed the games. Continue with structured practice.'
  },
  {
    id: '2',
    date: '2024-01-05',
    type: 'Progress Note',
    content: 'Mid-term progress review shows significant improvement in articulation goals. Emma is motivated and engaged during sessions.'
  }
]

export default function StudentProfile() {
  return (
    <div className="min-h-screen py-8">
      <div className="container-center space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Link href="/students">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to Students</span>
            </Button>
          </Link>
        </div>

        {/* Student Info Header */}
        <Card>
          <CardContent className="flex items-start space-x-6">
            {/* Avatar */}
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-serif font-bold text-2xl text-pink-600">
                {mockStudent.initials}
              </span>
            </div>
            
            {/* Student Details */}
            <div className="flex-1">
              <h1 className="text-3xl font-display font-bold text-ink-800 mb-2">
                {mockStudent.name}
              </h1>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-sage-600">Grade: <span className="text-ink-700 font-medium">{mockStudent.grade}</span></p>
                  <p className="text-sage-600">Teacher: <span className="text-ink-700 font-medium">{mockStudent.teacher}</span></p>
                </div>
                <div>
                  <p className="text-sage-600">DOB: <span className="text-ink-700 font-medium">{new Date(mockStudent.dateOfBirth).toLocaleDateString()}</span></p>
                  <p className="text-sage-600">Start Date: <span className="text-ink-700 font-medium">{new Date(mockStudent.startDate).toLocaleDateString()}</span></p>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-col gap-2">
              <Button size="sm">New Session</Button>
              <Button variant="secondary" size="sm">Add Goal</Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ChartBarIcon className="w-5 h-5 text-pink-600" />
                    <span>Goal Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockGoals.map((goal) => (
                    <div key={goal.id} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-ink-800 text-sm">{goal.area}</p>
                          <p className="text-xs text-sage-600 mb-2">{goal.description}</p>
                        </div>
                        <span className="text-sm font-medium text-pink-600">
                          {goal.currentProgress}%
                        </span>
                      </div>
                      <div className="w-full bg-sage-100 rounded-full h-2">
                        <div 
                          className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.currentProgress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5 text-pink-600" />
                    <span>Recent Sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-pink-50 rounded-xl">
                      <div>
                        <p className="font-medium text-ink-800 text-sm">Today - 9:00 AM</p>
                        <p className="text-xs text-sage-600">Articulation Session</p>
                      </div>
                      <span className="bg-pink-200 text-pink-700 px-2 py-1 rounded-full text-xs">
                        Completed
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-sage-50 rounded-xl">
                      <div>
                        <p className="font-medium text-ink-800 text-sm">Jan 5 - 2:00 PM</p>
                        <p className="text-xs text-sage-600">Progress Review</p>
                      </div>
                      <span className="bg-sage-200 text-sage-700 px-2 py-1 rounded-full text-xs">
                        Completed
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-display font-semibold text-ink-800">
                Active Goals ({mockGoals.length})
              </h2>
              <Button>Add New Goal</Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {mockGoals.map((goal) => (
                <Card key={goal.id} hover>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif font-semibold text-ink-800 mb-1">
                            {goal.area}
                          </h3>
                          <span className={clsx(
                            'inline-block px-2 py-1 rounded-full text-xs font-medium',
                            goal.status === 'In Progress' && 'bg-pink-100 text-pink-700',
                            goal.status === 'Near Mastery' && 'bg-sage-100 text-sage-700'
                          )}>
                            {goal.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-pink-600">{goal.currentProgress}%</p>
                          <p className="text-xs text-sage-600">progress</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-ink-700">{goal.description}</p>
                      
                      <div className="w-full bg-sage-100 rounded-full h-2">
                        <div 
                          className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.currentProgress}%` }}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-sage-600">
                        <span>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</span>
                        <Button variant="ghost" size="sm">Edit Goal</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-display font-semibold text-ink-800">
                Session Notes
              </h2>
              <Button>Add New Note</Button>
            </div>

            <div className="space-y-4">
              {mockNotes.map((note) => (
                <Card key={note.id}>
                  <CardContent>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2">
                        <DocumentTextIcon className="w-5 h-5 text-pink-600" />
                        <span className="font-medium text-ink-800">{note.type}</span>
                      </div>
                      <span className="text-sm text-sage-600">
                        {new Date(note.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-ink-700 leading-relaxed">{note.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-display font-semibold text-ink-800">
                Schedule
              </h2>
              <Button>Schedule Session</Button>
            </div>

            <Card>
              <CardContent className="text-center py-12">
                <CalendarIcon className="w-16 h-16 text-sage-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-ink-800 mb-2">
                  No upcoming sessions
                </h3>
                <p className="text-sage-600 mb-4">
                  Schedule the next session for {mockStudent.name}
                </p>
                <Button>Schedule Now</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function clsx(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}