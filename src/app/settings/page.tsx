import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { 
  UserCircleIcon,
  BellIcon,
  CalendarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

export default function SettingsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container-center space-y-8">
        {/* Header */}
        <div className="stripe-bg p-6 rounded-2xl">
          <div>
            <h1 className="text-3xl font-display font-bold text-ink-800 mb-2">
              Settings
            </h1>
            <p className="text-sage-600">
              Manage your account and application preferences
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCircleIcon className="w-5 h-5 text-pink-600" />
                <span>Profile Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                label="Full Name"
                defaultValue="Dr. Sarah Johnson"
              />
              <Input 
                label="Email"
                type="email"
                defaultValue="sarah.johnson@example.com"
              />
              <Input 
                label="Phone"
                type="tel"
                defaultValue="(555) 123-4567"
              />
              <Input 
                label="License Number"
                defaultValue="SLP-12345"
              />
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BellIcon className="w-5 h-5 text-pink-600" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-ink-800">Session Reminders</p>
                    <p className="text-sm text-sage-600">Get notified before sessions</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-12 h-6 bg-pink-500 rounded-full shadow-inner"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-ink-800">Goal Reminders</p>
                    <p className="text-sm text-sage-600">Weekly progress check-ins</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input type="checkbox" className="sr-only" defaultChecked />
                    <div className="w-12 h-6 bg-pink-500 rounded-full shadow-inner"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-ink-800">Email Reports</p>
                    <p className="text-sm text-sage-600">Monthly summary reports</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-12 h-6 bg-sage-200 rounded-full shadow-inner"></div>
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                  </div>
                </div>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>

          {/* Schedule Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="w-5 h-5 text-pink-600" />
                <span>Schedule Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Work Start Time"
                  type="time"
                  defaultValue="08:00"
                />
                <Input 
                  label="Work End Time"
                  type="time"
                  defaultValue="16:00"
                />
              </div>
              <Input 
                label="Default Session Length"
                defaultValue="30 minutes"
              />
              <Input 
                label="Break Between Sessions"
                defaultValue="5 minutes"
              />
              <Button>Update Schedule</Button>
            </CardContent>
          </Card>

          {/* App Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cog6ToothIcon className="w-5 h-5 text-pink-600" />
                <span>Application Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    Theme
                  </label>
                  <select className="input-field">
                    <option>Pink Garden (Default)</option>
                    <option>Classic Blue</option>
                    <option>Sage Green</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    Date Format
                  </label>
                  <select className="input-field">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-2">
                    Time Format
                  </label>
                  <select className="input-field">
                    <option>12-hour (AM/PM)</option>
                    <option>24-hour</option>
                  </select>
                </div>
              </div>
              <Button>Save Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}