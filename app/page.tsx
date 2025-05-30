import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Bot,
  BrainCircuit,
  ChevronRight,
  LineChart,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  Zap,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Marketing with <span className="text-gradient">AI-Powered</span> Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Automate, optimize, and scale your marketing efforts with cutting-edge AI technology designed for
                  modern businesses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Book a Strategy Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Marketing Dashboard"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-xl object-cover animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-xl font-medium mb-8">Trusted by innovative companies</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-70">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-8 w-32 bg-muted-foreground/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI-Powered Marketing Solutions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Leverage the power of artificial intelligence to transform your marketing strategy and drive results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <BrainCircuit className="h-10 w-10 text-accent" />,
                title: "AI-Automated Ad Creation",
                description: "Generate high-converting ad creative and copy tailored to your target audience.",
              },
              {
                icon: <Bot className="h-10 w-10 text-accent" />,
                title: "AI Voice Caller Follow-ups",
                description: "Automate follow-up calls with natural-sounding AI voices that engage prospects.",
              },
              {
                icon: <Target className="h-10 w-10 text-accent" />,
                title: "Campaign Management",
                description: "End-to-end campaign management with AI-driven optimization and testing.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-accent" />,
                title: "Analytics Dashboard",
                description: "Real-time insights and predictive analytics to measure and improve performance.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-accent" />,
                title: "AI Chatbot Integration",
                description: "Engage website visitors 24/7 with intelligent conversational AI.",
              },
              {
                icon: <Sparkles className="h-10 w-10 text-accent" />,
                title: "Content Generation",
                description: "Create SEO-optimized content at scale for blogs, social media, and more.",
              },
            ].map((service, i) => (
              <Card key={i} className="card-hover border-border/40">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted">{service.icon}</div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <Link href="/services" className="inline-flex items-center text-sm font-medium text-accent">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our streamlined approach delivers results through a proven methodology.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business goals, target audience, and current marketing efforts.",
                icon: <Zap className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a customized AI marketing strategy tailored to your needs.",
                icon: <BrainCircuit className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Implementation",
                description: "We deploy AI-powered tools and campaigns to execute the strategy.",
                icon: <Rocket className="h-8 w-8" />,
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and refinement to maximize ROI and performance.",
                icon: <BarChart3 className="h-8 w-8" />,
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t border-dashed border-border"></div>
                )}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-accent">{step.step}</div>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses that have transformed their marketing with our AI solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote:
                  "Veros Marketing revolutionized our approach to digital advertising. Their AI-powered solutions increased our conversion rates by 45% in just two months.",
                author: "Sarah Johnson",
                role: "Marketing Director, TechStart Inc.",
              },
              {
                quote:
                  "The AI voice caller system has been a game-changer for our sales team. We've seen a 60% increase in follow-up engagement and 30% more meetings booked.",
                author: "Michael Chen",
                role: "Sales Manager, GrowthForce",
              },
              {
                quote:
                  "Working with Veros has given us a competitive edge. Their analytics dashboard provides insights we never had access to before, helping us make data-driven decisions.",
                author: "Emma Rodriguez",
                role: "CEO, Boutique Brands",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="card-hover border-border/40">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex-1">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-500 to-navy-700 animate-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Transform Your Marketing?
              </h2>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a free strategy call with our team to discover how AI can revolutionize your marketing efforts.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
