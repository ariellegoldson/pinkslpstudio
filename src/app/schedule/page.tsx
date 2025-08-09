'use client'

import { useState } from 'react'
import Card, { CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { format, startOfWeek, addDays, subWeeks, addWeeks } from 'date-fns'

// Mock sessions data
const mockSessions = [
  {
    id: '1',
    studentName: 'Emma Thompson',
    startTime: '9:00 AM',
    endTime: '9:30 AM',
    day: 0, // Monday
    timeSlot: 9,
    status: 'upcoming',
    location: 'Room 101'
  },
  {
    id: '2',
    studentName: 'Marcus Johnson', 
    startTime: '8:30 AM',
    endTime: '9:00 AM',
    day: 0, // Monday
    timeSlot: 8.5,
    status: 'seen',
    location: 'Room 101'
  },
  {
    id: '3',
    studentName: 'Sophie Chen',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    day: 1, // Tuesday
    timeSlot: 10,
    status: 'upcoming',
    location: 'Room 102'
  },
  {
    id: '4',
    studentName: 'Alex Rodriguez',
    startTime: '2:00 PM',
    endTime: '2:30 PM',
    day: 2, // Wednesday
    timeSlot: 14,
    status: 'missed',
    location: 'Room 101'
  }
]

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
]

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function getSessionStyle(status: string) {
  switch (status) {
    case 'upcoming':
      return 'bg-pink-200 text-pink-700 border-pink-300'
    case 'seen':
      return 'bg-pink-500 text-white border-pink-600'
    case 'missed':
      return 'bg-ink-100 text-ink-700 border-ink-200'
    default:
      return 'bg-sage-100 text-sage-700 border-sage-200'
  }
}

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }) // Start on Monday

  const goToPreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1))
  }

  const goToNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container-center space-y-8">
        {/* Header */}
        <div className="stripe-bg p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-ink-800 mb-2">
                Weekly Schedule
              </h1>
              <p className="text-sage-600">
                Week of {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 4), 'MMM d, yyyy')}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={goToPreviousWeek}
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={goToToday}
                >
                  Today
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={goToNextWeek}
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </Button>
              </div>
              <Button className="flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>New Session</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Legend */}
        <Card>
          <CardContent>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-pink-200 border border-pink-300 rounded"></div>
                <span className="text-ink-700">Upcoming</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-pink-500 border border-pink-600 rounded"></div>
                <span className="text-ink-700">Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-ink-100 border border-ink-200 rounded"></div>
                <span className="text-ink-700">Missed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Grid */}
        <Card>
          <CardContent padding="none">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Days Header */}
                <div className="grid grid-cols-6 border-b border-sage-200">
                  <div className="p-4 font-medium text-sage-600 bg-sage-50">Time</div>
                  {weekDays.map((day, index) => (
                    <div 
                      key={day} 
                      className="p-4 font-medium text-center bg-sage-50 border-l border-sage-200"
                    >
                      <div className="text-ink-800">{day}</div>
                      <div className="text-sm text-sage-600">
                        {format(addDays(weekStart, index), 'MMM d')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                {timeSlots.map((timeSlot, timeIndex) => (
                  <div key={timeSlot} className="grid grid-cols-6 border-b border-sage-100">
                    {/* Time Column */}
                    <div className="p-4 text-sm text-sage-600 bg-sage-25 font-medium sticky left-0">
                      {timeSlot}
                    </div>
                    
                    {/* Day Columns */}
                    {weekDays.map((_, dayIndex) => (
                      <div 
                        key={dayIndex}
                        className="p-2 border-l border-sage-100 min-h-[60px] relative hover:bg-sage-25 transition-colors"
                      >
                        {mockSessions
                          .filter(session => 
                            session.day === dayIndex && 
                            session.timeSlot === (timeIndex < 4 ? 8 + (timeIndex * 0.5) : 12 + ((timeIndex - 4) * 0.5))
                          )
                          .map(session => (
                            <div
                              key={session.id}
                              className={`p-2 rounded-lg text-xs font-medium border cursor-pointer hover:shadow-md transition-all ${getSessionStyle(session.status)}`}
                            >
                              <div className="font-semibold mb-1">{session.studentName}</div>
                              <div className="opacity-90">
                                {session.startTime} - {session.endTime}
                              </div>
                              <div className="opacity-75 mt-1">
                                {session.location}
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Week Summary */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-ink-800 mb-1">
                {mockSessions.length}
              </div>
              <div className="text-sm text-sage-600">Total Sessions</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-1">
                {mockSessions.filter(s => s.status === 'seen').length}
              </div>
              <div className="text-sm text-sage-600">Completed</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-sage-600 mb-1">
                {mockSessions.filter(s => s.status === 'upcoming').length}
              </div>
              <div className="text-sm text-sage-600">Upcoming</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-ink-600 mb-1">
                {mockSessions.filter(s => s.status === 'missed').length}
              </div>
              <div className="text-sm text-sage-600">Missed</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}