import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                AI Marketing <span className="text-gradient">Insights</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert perspectives on AI, marketing trends, and strategies to help your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="The Future of AI in Marketing"
                  width={500}
                  height={300}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium w-fit">
                Featured
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">The Future of AI in Marketing: Trends to Watch in 2025</h2>
                <p className="text-muted-foreground">
                  Artificial intelligence is rapidly transforming the marketing landscape. In this article, we explore
                  the emerging trends and technologies that will shape the future of AI-powered marketing in 2025 and
                  beyond.
                </p>
                <p className="text-sm text-muted-foreground">May 15, 2025 • 10 min read</p>
              </div>
              <Button asChild className="w-fit">
                <Link href="/blog/future-of-ai-in-marketing">
                  Read Article <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay up-to-date with the latest insights and strategies in AI marketing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "How AI Voice Technology is Revolutionizing Sales Follow-ups",
                category: "AI Technology",
                image: "/placeholder.svg?height=400&width=600",
                date: "May 10, 2025",
                readTime: "8 min read",
                excerpt:
                  "Discover how AI-powered voice technology is transforming the way businesses handle sales follow-ups and customer engagement.",
              },
              {
                title: "5 Ways to Optimize Your Ad Campaigns with AI",
                category: "Digital Advertising",
                image: "/placeholder.svg?height=400&width=600",
                date: "May 5, 2025",
                readTime: "6 min read",
                excerpt:
                  "Learn practical strategies for leveraging AI to improve the performance of your digital advertising campaigns.",
              },
              {
                title: "The Role of Predictive Analytics in Modern Marketing",
                category: "Data Analytics",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 28, 2025",
                readTime: "7 min read",
                excerpt:
                  "Explore how predictive analytics is helping marketers anticipate customer behavior and optimize their strategies.",
              },
              {
                title: "Building Effective AI Chatbots for Customer Engagement",
                category: "Customer Experience",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 20, 2025",
                readTime: "9 min read",
                excerpt:
                  "A comprehensive guide to creating AI chatbots that enhance customer experience and drive conversions.",
              },
              {
                title: "The Ethics of AI in Marketing: Navigating Privacy Concerns",
                category: "Ethics & Privacy",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 15, 2025",
                readTime: "11 min read",
                excerpt:
                  "An in-depth look at the ethical considerations and privacy challenges of using AI in marketing.",
              },
              {
                title: "Content Generation at Scale: How AI is Changing Content Marketing",
                category: "Content Marketing",
                image: "/placeholder.svg?height=400&width=600",
                date: "April 8, 2025",
                readTime: "7 min read",
                excerpt:
                  "Discover how AI-powered content generation tools are enabling marketers to create high-quality content at scale.",
              },
            ].map((post, i) => (
              <Card key={i} className="card-hover border-border/40 overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button asChild variant="outline" className="mt-2">
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read Article <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Browse by Category</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our content by topic to find the insights most relevant to your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "AI Technology",
              "Digital Advertising",
              "Data Analytics",
              "Customer Experience",
              "Content Marketing",
              "Marketing Automation",
              "Ethics & Privacy",
              "Industry Trends",
            ].map((category, i) => (
              <Link
                key={i}
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="p-4 bg-card rounded-lg border border-border/40 text-center hover:bg-accent/10 hover:border-accent/40 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest AI marketing insights and strategies delivered directly to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
