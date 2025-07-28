"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Calendar, Github, ExternalLink, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TiptapEditor, VideoEmbed, ImageGallery } from "@/components/tiptap-editor"

// Sample project data with rich content including videos and images
const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A modern task management application with drag-and-drop functionality, real-time collaboration, and advanced project tracking features. Built with React and Node.js, this application helps teams organize their work efficiently with intuitive interfaces and powerful automation tools.",
    richContent: `
      <h2>🚀 Project Overview</h2>
      <p>This comprehensive task management solution provides teams with everything they need to stay organized and productive. Built with modern technologies and best practices, it offers a seamless experience for project management.</p>
    `,
    videos: [
      {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Task Management App - Full Demo",
        caption: "📹 Complete walkthrough of all features and functionality",
      },
      {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Drag & Drop Feature Demo",
        caption: "🎯 See the intuitive drag-and-drop interface in action",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=250&width=400&text=Dashboard+Overview",
        alt: "Dashboard Overview",
        caption: "📊 Main dashboard with project overview and analytics",
      },
      {
        src: "/placeholder.svg?height=250&width=400&text=Task+Board",
        alt: "Task Board",
        caption: "📋 Kanban-style task board with drag-and-drop functionality",
      },
      {
        src: "/placeholder.svg?height=250&width=400&text=Team+Collaboration",
        alt: "Team Collaboration",
        caption: "👥 Real-time collaboration features and team management",
      },
      {
        src: "/placeholder.svg?height=250&width=400&text=Analytics+View",
        alt: "Analytics View",
        caption: "📈 Detailed analytics and reporting dashboard",
      },
    ],
    moreContent: `
      <h3>✨ Key Highlights</h3>
      <ul>
        <li><strong>Drag & Drop Interface:</strong> Intuitive task organization with smooth animations</li>
        <li><strong>Real-time Collaboration:</strong> Live updates using Socket.io for seamless teamwork</li>
        <li><strong>Advanced Filtering:</strong> Smart search and filter capabilities</li>
        <li><strong>Time Tracking:</strong> Built-in time tracking with detailed analytics</li>
        <li><strong>Team Analytics:</strong> Comprehensive reporting and insights</li>
      </ul>
      
      <h3>🎯 Problem Solved</h3>
      <p>Many teams struggle with scattered task management across multiple platforms. This application consolidates everything into one powerful, user-friendly interface that scales with your team's needs.</p>
      
      <blockquote>
        "The goal was to create a task management tool that feels natural to use while providing enterprise-level features for growing teams."
      </blockquote>
      
      <h3>🔧 Technical Implementation</h3>
      <p>The application follows a <strong>microservices architecture</strong> with the following components:</p>
      <ul>
        <li>Frontend built with <code>React 18</code> and <code>TypeScript</code></li>
        <li>Backend API using <code>Node.js</code> and <code>Express</code></li>
        <li>Real-time features powered by <code>Socket.io</code></li>
        <li>Database: <code>MongoDB</code> with <code>Mongoose</code> ODM</li>
        <li>Styling: <code>Tailwind CSS</code> for responsive design</li>
      </ul>
    `,
    rating: 4.8,
    uploadDate: "2024-01-15",
    updatedDate: "2024-01-20",
    category: "Productivity",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=800",
    githubUrl: "https://github.com/example/task-management-app",
    liveUrl: "https://task-manager-demo.vercel.app",
    features: [
      "Drag & Drop Interface",
      "Real-time Collaboration",
      "Advanced Filtering",
      "Time Tracking",
      "Team Analytics",
    ],
    status: "Active",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Perfect for small to medium businesses looking to establish their online presence.",
    richContent: `
      <h2>🛒 E-commerce Platform</h2>
      <p>A complete e-commerce solution featuring user authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe, order management, inventory tracking, and a comprehensive admin dashboard.</p>
    `,
    videos: [
      {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "E-commerce Platform Demo",
        caption: "🛍️ Complete shopping experience from browse to checkout",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=250&width=400&text=Product+Catalog",
        alt: "Product Catalog",
        caption: "🏪 Beautiful product catalog with advanced filtering",
      },
      {
        src: "/placeholder.svg?height=250&width=400&text=Shopping+Cart",
        alt: "Shopping Cart",
        caption: "🛒 Intuitive shopping cart with real-time updates",
      },
      {
        src: "/placeholder.svg?height=250&width=400&text=Admin+Dashboard",
        alt: "Admin Dashboard",
        caption: "📊 Comprehensive admin dashboard for store management",
      },
    ],
    moreContent: `
      <h3>💳 Payment & Security</h3>
      <p>Integrated with <strong>Stripe</strong> for secure payment processing, supporting multiple payment methods including credit cards, digital wallets, and buy-now-pay-later options.</p>
      
      <h3>📊 Admin Dashboard</h3>
      <ul>
        <li>Real-time sales analytics</li>
        <li>Inventory management system</li>
        <li>Customer relationship management</li>
        <li>Order processing workflow</li>
      </ul>
      
      <blockquote>
        "Built with scalability in mind, this platform can handle everything from a small boutique to a growing enterprise."
      </blockquote>
    `,
    rating: 4.9,
    uploadDate: "2024-01-10",
    updatedDate: "2024-01-18",
    category: "E-commerce",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "NextAuth", "Vercel"],
    image: "/placeholder.svg?height=400&width=800",
    githubUrl: "https://github.com/example/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "SEO Optimized", "Mobile Responsive"],
    status: "Active",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather tracking with beautiful visualizations and detailed forecasts for multiple locations worldwide.",
    richContent: `
      <h2>🌤️ Weather Dashboard</h2>
      <p>An elegant weather dashboard that provides comprehensive weather information including current conditions, hourly forecasts, 7-day outlook, and interactive maps.</p>
    `,
    videos: [
      {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Weather Dashboard Features",
        caption: "🌦️ Interactive weather maps and forecast visualization",
      },
    ],
    images: [
      {
        src: "/placeholder.svg?height=250&width=400&text=Weather+Map",
        alt: "Weather Map",
        caption: "🗺️ Interactive weather maps with real-time data",
      },
      {
        src: "/placeholder.svg?height=250&width=400&text=Forecast+Charts",
        alt: "Forecast Charts",
        caption: "📈 Beautiful charts showing weather trends and forecasts",
      },
    ],
    moreContent: `
      <h3>📍 Location Features</h3>
      <ul>
        <li>GPS-based location detection</li>
        <li>Multiple saved locations</li>
        <li>Global weather coverage</li>
        <li>Interactive weather maps</li>
      </ul>
      
      <h3>📈 Data Visualization</h3>
      <p>Beautiful charts and graphs powered by <code>Chart.js</code> showing temperature trends, precipitation patterns, and weather forecasts.</p>
    `,
    rating: 4.6,
    uploadDate: "2024-01-08",
    updatedDate: "2024-01-16",
    category: "Utility",
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox", "Vuex", "SCSS"],
    image: "/placeholder.svg?height=400&width=800",
    githubUrl: "https://github.com/example/weather-dashboard",
    liveUrl: "https://weather-app-demo.vercel.app",
    features: ["Real-time Data", "Interactive Maps", "7-day Forecast", "Weather Alerts", "Multiple Locations"],
    status: "Active",
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const projectId = Number.parseInt(params.id as string)
    const foundProject = projects.find((p) => p.id === projectId)

    if (foundProject) {
      setProject(foundProject)
    }
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header with Back Button */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={() => router.push("/")} className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl mb-8 shadow-2xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge
                className={`px-3 py-1 font-medium ${
                  project.category === "Productivity"
                    ? "bg-green-500/90 text-white"
                    : project.category === "E-commerce"
                      ? "bg-orange-500/90 text-white"
                      : project.category === "Utility"
                        ? "bg-blue-500/90 text-white"
                        : project.category === "Analytics"
                          ? "bg-purple-500/90 text-white"
                          : project.category === "Lifestyle"
                            ? "bg-pink-500/90 text-white"
                            : project.category === "Finance"
                              ? "bg-emerald-500/90 text-white"
                              : project.category === "Developer Tools"
                                ? "bg-indigo-500/90 text-white"
                                : "bg-red-500/90 text-white"
                }`}
              >
                {project.category}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">{project.status}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Rich Content with Tiptap Editor, Videos, and Images */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>

                {/* Initial Rich Content */}
                <TiptapEditor content={project.richContent} editable={false} />

                {/* Video Demos */}
                {project.videos && project.videos.length > 0 && (
                  <div className="my-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      🎥 Video Demonstrations
                    </h3>
                    {project.videos.map((video: any, index: number) => (
                      <VideoEmbed key={index} src={video.src} title={video.title} caption={video.caption} />
                    ))}
                  </div>
                )}

                {/* Image Gallery */}
                {project.images && project.images.length > 0 && (
                  <div className="my-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      🖼️ Screenshots & Interface
                    </h3>
                    <ImageGallery images={project.images} />
                  </div>
                )}

                {/* Additional Rich Content */}
                <TiptapEditor content={project.moreContent} editable={false} />
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, index: number) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`px-3 py-1 font-medium ${
                        index % 3 === 0
                          ? "border-blue-300 text-blue-700 bg-blue-50"
                          : index % 3 === 1
                            ? "border-purple-300 text-purple-700 bg-purple-50"
                            : "border-green-300 text-green-700 bg-green-50"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{project.rating}</span>
                  <span className="text-gray-600">/ 5.0</span>
                </div>

                {/* Dates */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Created</p>
                      <p className="font-medium">
                        {new Date(project.uploadDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="font-medium">
                        {new Date(project.updatedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </Link>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Related Projects */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Projects</h3>
                <div className="space-y-3">
                  {projects
                    .filter((p) => p.id !== project.id && p.category === project.category)
                    .slice(0, 2)
                    .map((relatedProject) => (
                      <Link key={relatedProject.id} href={`/project/${relatedProject.id}`}>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                          <Image
                            src={relatedProject.image || "/placeholder.svg"}
                            alt={relatedProject.title}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{relatedProject.title}</p>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600">{relatedProject.rating}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
