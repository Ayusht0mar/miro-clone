import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "For individuals and small teams",
    features: ["3 boards", "Basic templates", "24-hour support"],
  },
  {
    name: "Pro",
    price: "$12",
    description: "For growing teams and organizations",
    features: ["Unlimited boards", "Advanced templates", "Priority support", "Team collaboration"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: ["Unlimited everything", "Advanced security", "Dedicated account manager", "Custom integrations"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <button className="w-full bg-[#343434] py-1.5 px-3 rounded text-white">Choose Plan</button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

