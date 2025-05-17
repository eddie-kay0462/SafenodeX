import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cog, Shield } from "lucide-react"

export function FeatureCards() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white text-[#14213D]">
            <CardHeader className="flex flex-col items-center">
              <Brain className="h-12 w-12 text-[#009688]" />
              <CardTitle className="text-xl font-bold mt-4">AI Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Incorporating AI features like chatbots and predictive analytics into your applications for smarter
                business operations.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-[#14213D]">
            <CardHeader className="flex flex-col items-center">
              <Cog className="h-12 w-12 text-[#FF5722]" />
              <CardTitle className="text-xl font-bold mt-4">Business Automation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Streamlining workflows and tasks to improve efficiency and productivity through intelligent automation
                solutions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-[#14213D]">
            <CardHeader className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-[#009688]" />
              <CardTitle className="text-xl font-bold mt-4">Robust Security</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Ensuring the safety and integrity of your data with cutting-edge security measures and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
