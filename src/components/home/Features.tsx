import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Users, Zap, Globe } from 'lucide-react'

const features = [
  {
    title: "Infinite Canvas",
    description: "Zoom in and out of your ideas with our boundless workspace.",
    icon: Layers
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team, no matter where they are.",
    icon: Users
  },
  {
    title: "Lightning Fast",
    description: "Experience smooth performance, even with complex diagrams.",
    icon: Zap
  },
  {
    title: "Accessible Anywhere",
    description: "Access your boards from any device, anytime.",
    icon: Globe
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

