import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Case <span className="text-gradient">Studies</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore how our AI-powered marketing solutions have helped businesses achieve remarkable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "TechStart Inc.",
                category: "SaaS",
                image: "/placeholder.svg?height=400&width=600",
                stats: {
                  ctr: "+45%",
                  roi: "3.2x",
                  leads: "+68%",
                },
                description:
                  "How TechStart used AI-powered ad creation to boost conversion rates and reduce customer acquisition costs.",
              },
              {
                title: "GrowthForce",
                category: "B2B Services",
                image: "/placeholder.svg?height=400&width=600",
                stats: {
                  ctr: "+32%",
                  roi: "2.8x",
                  leads: "+60%",
                },
                description:
                  "GrowthForce leveraged our AI voice caller system to revolutionize their sales follow-up process.",
              },
              {
                title: "Boutique Brands",
                category: "E-commerce",
                image: "/placeholder.svg?height=400&width=600",
                stats: {
                  ctr: "+38%",
                  roi: "4.1x",
                  leads: "+52%",
                },
                description:
                  "How our analytics dashboard helped Boutique Brands optimize their marketing spend and increase ROAS.",
              },
              {
                title: "HealthTech Solutions",
                category: "Healthcare",
                image: "/placeholder.svg?height=400&width=600",
                stats: {
                  ctr: "+41%",
                  roi: "2.5x",
                  leads: "+47%",
                },
                description:
                  "HealthTech Solutions used our AI chatbot to qualify leads and improve patient engagement.",
              },
              {
                title: "Urban Eats",
                category: "Food & Beverage",
                image: "/placeholder.svg?height=400&width=600",
                stats: {
                  ctr: "+29%",
                  roi: "3.7x",
                  leads: "+55%",
                },
                description:
                  "How Urban Eats used our content generation tools to create compelling social media campaigns.",
              },
              {
                title: "EcoLiving",
                category: "Sustainability",
                image: "/placeholder.svg?height=400&width=600",
                stats: {
                  ctr: "+36%",
                  roi: "3.0x",
                  leads: "+63%",
                },
                description:
                  "EcoLiving's journey to increased brand awareness and customer engagement through AI marketing.",
              },
            ].map((study, i) => (
              <Card key={i} className="card-hover border-border/40 overflow-hidden">
                <div className="relative h-48">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{study.title}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-2">
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">CTR</p>
                      <p className="text-lg font-bold text-accent">{study.stats.ctr}</p>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">ROI</p>
                      <p className="text-lg font-bold text-accent">{study.stats.roi}</p>
                    </div>
                    <div className="text-center p-2 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">Leads</p>
                      <p className="text-lg font-bold text-accent">{study.stats.leads}</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-2">
                    <Link href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Case Study</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A deep dive into one of our most successful client partnerships.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="TechStart Inc. Case Study"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium w-fit">
                SaaS
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">TechStart Inc.: 45% Increase in Conversion Rates</h3>
                <p className="text-muted-foreground">
                  TechStart Inc., a growing SaaS company, was struggling with high customer acquisition costs and low
                  conversion rates from their digital advertising efforts. They needed a solution that could help them
                  optimize their marketing spend and improve results.
                </p>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Ad CTR</p>
                    <p className="text-2xl font-bold text-accent">+45%</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">ROAS</p>
                    <p className="text-2xl font-bold text-accent">3.2x</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">CAC</p>
                    <p className="text-2xl font-bold text-accent">-38%</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  By implementing our AI-powered ad creation and campaign management solutions, TechStart was able to
                  dramatically improve their marketing performance and achieve sustainable growth.
                </p>
              </div>
              <Button asChild className="w-fit">
                <Link href="/case-studies/techstart-inc">
                  Read Full Case Study <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear directly from our clients about their experience working with Veros Marketing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Veros Marketing's AI solutions have completely transformed our approach to digital advertising. We're seeing better results with less effort and lower costs.",
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
              {
                quote:
                  "The content generation tools have saved our marketing team countless hours while improving the quality and performance of our content across all channels.",
                author: "David Kim",
                role: "Content Manager, EcoLiving",
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
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a free strategy call with our team to discover how our AI solutions can help you achieve similar
                results.
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
