import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { 
  WateringCanSticker, 
  BunnySticker, 
  KeySticker, 
  RibbonSticker,
  WelcomePlaque 
} from '@/components/decorative/Stickers'
import { 
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Garden Collage */}
      <section className="stripe-bg py-16 relative overflow-hidden">
        <div className="container-center relative">
          {/* Background Garden Image Placeholder */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-64 bg-gradient-to-r from-sage-200 via-pink-100 to-sage-200 rounded-2xl" />
          </div>
          
          {/* Floating Stickers */}
          <div className="absolute top-8 left-8">
            <WateringCanSticker />
          </div>
          <div className="absolute top-4 right-16">
            <BunnySticker />
          </div>
          <div className="absolute bottom-8 left-24">
            <KeySticker />
          </div>
          <div className="absolute bottom-4 right-8">
            <RibbonSticker />
          </div>
          
          {/* Welcome Content */}
          <div className="relative z-10 text-center py-16">
            <WelcomePlaque className="mb-8" />
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-ink-800 mb-4">
              Good morning! ✨
            </h1>
            <p className="text-xl text-sage-600 max-w-2xl mx-auto">
              Ready to make a difference in your students&apos; communication journey today?
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container-center space-y-8">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/sessions/new">
              <Button size="lg" className="flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>New Session</span>
              </Button>
            </Link>
            <Link href="/students/new">
              <Button variant="secondary" size="lg" className="flex items-center space-x-2">
                <UserGroupIcon className="w-5 h-5" />
                <span>Add Student</span>
              </Button>
            </Link>
            <Link href="/schedule">
              <Button variant="ghost" size="lg" className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5" />
                <span>View Schedule</span>
              </Button>
            </Link>
          </div>

          {/* Today&apos;s Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <CardContent className="flex items-center space-x-4">
                <div className="p-3 bg-pink-100 rounded-2xl">
                  <CalendarIcon className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-800">8</p>
                  <p className="text-sm text-sage-600">Sessions Today</p>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="flex items-center space-x-4">
                <div className="p-3 bg-sage-100 rounded-2xl">
                  <UserGroupIcon className="w-8 h-8 text-sage-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-800">24</p>
                  <p className="text-sm text-sage-600">Active Students</p>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="flex items-center space-x-4">
                <div className="p-3 bg-pink-100 rounded-2xl">
                  <ClockIcon className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-800">6h</p>
                  <p className="text-sm text-sage-600">Hours Scheduled</p>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="flex items-center space-x-4">
                <div className="p-3 bg-sage-100 rounded-2xl">
                  <ChartBarIcon className="w-8 h-8 text-sage-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-800">92%</p>
                  <p className="text-sm text-sage-600">Goal Progress</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today&apos;s Sessions */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Today&apos;s Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-ink-800">Emma Thompson</p>
                    <p className="text-sm text-sage-600">9:00 AM - 9:30 AM</p>
                  </div>
                  <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-sage-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-ink-800">Marcus Johnson</p>
                    <p className="text-sm text-sage-600">8:30 AM - 9:00 AM</p>
                  </div>
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-ink-800">Sophie Chen</p>
                    <p className="text-sm text-sage-600">10:00 AM - 10:30 AM</p>
                  </div>
                  <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                </div>
                
                <Link href="/schedule" className="block">
                  <Button variant="ghost" className="w-full">
                    View Full Schedule
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-pink-300 pl-4 py-2">
                  <p className="font-semibold text-ink-800">Emma Thompson</p>
                  <p className="text-sm text-sage-600 mb-2">Today, 8:45 AM</p>
                  <p className="text-sm text-ink-700">
                    Great progress on /r/ sounds in initial position. Showed 80% accuracy today...
                  </p>
                </div>
                
                <div className="border-l-4 border-sage-300 pl-4 py-2">
                  <p className="font-semibold text-ink-800">Marcus Johnson</p>
                  <p className="text-sm text-sage-600 mb-2">Yesterday, 2:30 PM</p>
                  <p className="text-sm text-ink-700">
                    Working on social communication skills. Practiced turn-taking in conversation...
                  </p>
                </div>
                
                <Link href="/notes" className="block">
                  <Button variant="ghost" className="w-full">
                    View All Notes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}