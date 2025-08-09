import Card, { CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import EmptyState from '@/components/ui/EmptyState'
import { 
  ChartBarIcon,
  DocumentArrowDownIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export default function ReportsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container-center space-y-8">
        {/* Header */}
        <div className="stripe-bg p-6 rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-ink-800 mb-2">
                Reports & Analytics
              </h1>
              <p className="text-sage-600">
                Track progress and generate reports for your caseload
              </p>
            </div>
            <Button className="flex items-center space-x-2">
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span>Generate Report</span>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="text-center">
              <div className="p-4 bg-pink-100 rounded-2xl w-fit mx-auto mb-4">
                <ChartBarIcon className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-ink-800 mb-1">87%</div>
              <div className="text-sm text-sage-600">Average Goal Progress</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="p-4 bg-sage-100 rounded-2xl w-fit mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-sage-600" />
              </div>
              <div className="text-2xl font-bold text-ink-800 mb-1">124</div>
              <div className="text-sm text-sage-600">Sessions This Month</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="text-center">
              <div className="p-4 bg-pink-100 rounded-2xl w-fit mx-auto mb-4">
                <DocumentArrowDownIcon className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-ink-800 mb-1">8</div>
              <div className="text-sm text-sage-600">Reports Generated</div>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon */}
        <Card>
          <CardContent>
            <EmptyState
              icon={<ChartBarIcon className="w-12 h-12 text-sage-400" />}
              title="Reports Coming Soon"
              description="Detailed analytics and progress reports will be available in the next update."
              action={{
                label: "Learn More",
                onClick: () => console.log('Learn more about reports')
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}