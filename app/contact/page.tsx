"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const formData = new FormData(e.currentTarget)
  formData.append("access_key", "ce2770a5-c375-4a34-a97e-fe124a924a50") // replace this with your real access key
  formData.append("from_name", "Veros Website Contact Form")
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (result.success) {
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch with you shortly.",
      })
      if (e?.currentTarget) {
  e.currentTarget.reset()
}
    } else {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    }
  } catch (error) {
    toast({
      title: "Network error",
      description: "Check your connection and try again.",
      variant: "destructive",
    })
  }

  setIsSubmitting(false)
}


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your marketing with AI? We're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-muted-foreground">
                  Have questions about our AI marketing solutions? Fill out the form and one of our experts will get
                  back to you shortly.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 AI Boulevard, San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@verosmarketing.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9am - 6pm PST</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full max-w-[400px] aspect-square mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Contact"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-xl object-cover"
                />
              </div>
            </div>
            <Card className="border-border/40">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ad-creation">AI-Automated Ad Creation</SelectItem>
                        <SelectItem value="voice-caller">AI Voice Caller Follow-ups</SelectItem>
                        <SelectItem value="campaign">Campaign Management</SelectItem>
                        <SelectItem value="analytics">Analytics Dashboard</SelectItem>
                        <SelectItem value="chatbot">AI Chatbot Integration</SelectItem>
                        <SelectItem value="content">Content Generation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your marketing goals and challenges..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Book a Strategy Call</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a free 30-minute strategy call with one of our AI marketing experts.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-3xl border-border/40">
              <CardContent className="p-6">
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Calendly Embed Placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our AI marketing solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What makes your AI marketing solutions different?",
                answer:
                  "Our solutions combine cutting-edge AI technology with marketing expertise to deliver personalized, data-driven strategies that drive measurable results. Unlike generic marketing tools, our AI adapts to your specific business needs and target audience.",
              },
              {
                question: "How long does it take to see results?",
                answer:
                  "While results vary based on your industry and goals, most clients begin to see improvements within the first 30 days. Our AI continuously learns and optimizes, so results typically improve over time as the system gathers more data.",
              },
              {
                question: "Do I need technical expertise to use your solutions?",
                answer:
                  "No technical expertise is required. Our team handles the implementation and provides a user-friendly interface for monitoring results. We also offer comprehensive training and ongoing support to ensure you get the most out of our solutions.",
              },
              {
                question: "Can your solutions integrate with my existing marketing tools?",
                answer:
                  "Yes, our AI marketing solutions are designed to integrate seamlessly with most popular marketing platforms and CRM systems. During onboarding, we'll assess your current tech stack and ensure proper integration.",
              },
              {
                question: "What kind of businesses do you work with?",
                answer:
                  "We work with businesses of all sizes across various industries. Our solutions are particularly effective for B2B services, SaaS, e-commerce, healthcare, and professional services, but can be adapted to most business models.",
              },
              {
                question: "How do you measure success?",
                answer:
                  "We establish clear KPIs based on your business goals at the beginning of our engagement. Our analytics dashboard provides transparent reporting on these metrics, and we conduct regular review meetings to discuss performance and strategy adjustments.",
              },
            ].map((faq, i) => (
              <Card key={i} className="card-hover border-border/40">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
                Take the first step towards AI-powered marketing success.
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
