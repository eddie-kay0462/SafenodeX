import { Card, CardContent } from "@/components/ui/card"

export function AutomationSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <Card className="bg-white text-[#14213D]">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Auto-Attmate</h2>
                <p className="text-lg mb-2">Efficiency</p>
                <p className="text-gray-700">
                  Efficiency and continuous improvement through intelligent automation. Our solutions adapt to your
                  business needs and grow with your organization.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/automation-dashboard.png"
                  alt="Automation Dashboard"
                  className="rounded-lg shadow-lg"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
