import { Card, CardContent, CardFooter } from "@/components/ui/card"

const testimonials = [
  {
    quote: "MiroClone has revolutionized how our team collaborates on projects. It's intuitive and powerful!",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "SJ"
  },
  {
    quote: "The infinite canvas is a game-changer. We can now visualize our entire project scope effortlessly.",
    author: "Mike Chen",
    role: "UX Designer at DesignHub",
    avatar: "MC"
  },
  {
    quote: "Real-time collaboration in MiroClone has made our remote brainstorming sessions incredibly productive.",
    author: "Emily Rodriguez",
    role: "Marketing Director at GrowthCo",
    avatar: "ER"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between bg-white">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

