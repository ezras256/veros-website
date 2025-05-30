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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive AI-powered marketing solutions designed to drive growth and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI-Powered Marketing Solutions</h2>
                <p className="text-muted-foreground">
                  At Veros Marketing, we leverage cutting-edge artificial intelligence to transform how businesses
                  approach marketing. Our suite of services is designed to automate, optimize, and scale your marketing
                  efforts, delivering measurable results and ROI.
                </p>
                <p className="text-muted-foreground">
                  Whether you're looking to enhance your digital advertising, improve customer engagement, or gain
                  deeper insights into your marketing performance, our AI solutions can help you achieve your goals more
                  efficiently and effectively.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Marketing Dashboard"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive range of AI-powered marketing solutions.
              </p>
            </div>
          </div>

          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="flex justify-center lg:order-last">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="AI Ad Creation"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="p-2 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <BrainCircuit className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">AI-Automated Ad Creation</h3>
                <p className="text-muted-foreground">
                  Our AI-powered ad creation platform generates high-converting ad creative and copy tailored to your
                  target audience, saving you time and improving performance.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Dynamic creative optimization based on audience data</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Multivariate testing to identify winning combinations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Automated ad scaling across multiple platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="AI Voice Caller"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="p-2 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Bot className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">AI Voice Caller Follow-ups</h3>
                <p className="text-muted-foreground">
                  Our AI voice caller system automates follow-up calls with natural-sounding AI voices that engage
                  prospects, qualify leads, and book meetings without human intervention.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Natural language processing for human-like conversations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Intelligent scheduling and calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Customizable scripts and voice profiles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="flex justify-center lg:order-last">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Campaign Management"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="p-2 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Campaign Management</h3>
                <p className="text-muted-foreground">
                  Our end-to-end campaign management service leverages AI for optimization, testing, and scaling across
                  multiple channels to maximize your marketing ROI.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Automated budget allocation based on performance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Cross-channel campaign coordination</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Real-time optimization and performance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Analytics Dashboard"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="p-2 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <LineChart className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Our AI-powered analytics dashboard provides real-time insights and predictive analytics to measure and
                  improve your marketing performance.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Unified reporting across all marketing channels</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Predictive analytics for future performance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                    <span>Automated insights and recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complement your marketing strategy with these specialized AI solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-accent" />,
                title: "AI Chatbot Integration",
                description:
                  "Engage website visitors 24/7 with intelligent conversational AI that qualifies leads and answers questions.",
              },
              {
                icon: <Sparkles className="h-10 w-10 text-accent" />,
                title: "Content Generation",
                description:
                  "Create SEO-optimized content at scale for blogs, social media, email campaigns, and more.",
              },
              {
                icon: <Zap className="h-10 w-10 text-accent" />,
                title: "Conversion Rate Optimization",
                description: "Use AI to analyze user behavior and optimize your website for maximum conversions.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-accent" />,
                title: "Predictive Analytics",
                description: "Forecast marketing trends and customer behavior to stay ahead of the competition.",
              },
              {
                icon: <Rocket className="h-10 w-10 text-accent" />,
                title: "Marketing Automation",
                description: "Streamline your marketing workflows with AI-powered automation tools and triggers.",
              },
              {
                icon: <BrainCircuit className="h-10 w-10 text-accent" />,
                title: "Personalization Engine",
                description:
                  "Deliver personalized experiences to your customers based on their behavior and preferences.",
              },
            ].map((service, i) => (
              <Card key={i} className="card-hover border-border/40">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted">{service.icon}</div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Flexible Pricing</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your business needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$1,499",
                description: "Perfect for small businesses just getting started with AI marketing.",
                features: [
                  "AI Ad Creation (Basic)",
                  "Campaign Management (1 channel)",
                  "Basic Analytics Dashboard",
                  "Email Support",
                ],
              },
              {
                name: "Growth",
                price: "$2,999",
                description: "Ideal for growing businesses looking to scale their marketing efforts.",
                features: [
                  "AI Ad Creation (Advanced)",
                  "AI Voice Caller (100 calls/month)",
                  "Campaign Management (3 channels)",
                  "Full Analytics Dashboard",
                  "AI Chatbot Integration",
                  "Priority Support",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Comprehensive solution for established businesses with complex needs.",
                features: [
                  "AI Ad Creation (Premium)",
                  "AI Voice Caller (Unlimited)",
                  "Campaign Management (All channels)",
                  "Advanced Analytics with Predictive Insights",
                  "AI Chatbot + Content Generation",
                  "Dedicated Account Manager",
                ],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`card-hover border-border/40 ${plan.highlighted ? "ring-2 ring-accent relative" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.name !== "Enterprise" && <span className="text-muted-foreground ml-1">/month</span>}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="space-y-2 flex-1">
                    <p className="font-medium">Features include:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-accent shrink-0 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className={plan.highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
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
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Ready to Transform Your Marketing?
              </h2>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a free strategy call with our team to discover how our AI solutions can help you achieve your
                marketing goals.
              </p>
            </div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
