import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About <span className="text-gradient">Veros Marketing</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to revolutionize marketing through artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Founder"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground">
                  Veros Marketing was founded in 2025 with a clear vision: to bridge the gap between cutting-edge AI
                  technology and practical marketing applications for businesses of all sizes.
                </p>
                <p className="text-muted-foreground">
                  Our founder, recognizing the transformative potential of AI in marketing, assembled a team of experts
                  in machine learning, data science, and digital marketing to create solutions that deliver measurable
                  results.
                </p>
                <p className="text-muted-foreground">
                  Today, we're at the forefront of the AI marketing revolution, helping businesses automate, optimize,
                  and scale their marketing efforts with innovative technology that was once only available to
                  enterprise companies with massive budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                To democratize access to AI-powered marketing tools and strategies, enabling businesses of all sizes to
                compete effectively in the digital landscape.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Award className="h-10 w-10 text-accent" />,
                title: "Excellence",
                description:
                  "We're committed to delivering the highest quality solutions that drive real business results.",
              },
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "Collaboration",
                description: "We work closely with our clients, treating their success as our own.",
              },
              {
                icon: <Clock className="h-10 w-10 text-accent" />,
                title: "Innovation",
                description: "We continuously explore new technologies and methodologies to stay ahead of the curve.",
              },
            ].map((value, i) => (
              <Card key={i} className="card-hover border-border/40">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="p-2 rounded-lg bg-muted">{value.icon}</div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experts behind Veros Marketing's innovative AI solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                name: "Ezra Schultz",
                role: "Founder & CEO",
                bio: "(placeholder)",
              }
              ].map((member, i) => (
              <Card key={i} className="card-hover border-border/40">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-muted"></div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Ready to Work With Us?</h2>
              <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a free strategy call with our team to discover how we can help transform your marketing.
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
