"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Star, Calendar } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import mockProjects from "@/data/projects.json"
import placeholderImage from "@/assets/placeholder-400x200.svg"

const projects = mockProjects.data

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  // Filter projects based on search term
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Sort projects based on selected option
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating
    } else if (sortBy === "newest") {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    }
    return 0
  })

  const handleOnClick = (project: any) => {
    // redirect to project/:id
    window.location.href = `/project/${project.id}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dev Showcase</h1>
            <p className="text-lg text-blue-100">Discover, share, and explore side projects built by developers.</p>
            <p className="text-lg text-blue-100">Show off your work, get feedback, and try out what others are building.</p>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500 transition-all duration-200"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-48 h-12 px-3 py-2 border border-white/20 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 focus:bg-white focus:text-gray-900 transition-all duration-200"
            >
              <option value="newest">📅 Newest Upload</option>
              <option value="rating">⭐ Highest Rating</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-[1.02]"
              onClick={() => handleOnClick(project)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={placeholderImage}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="secondary"
                    className={`bg-white/95 text-gray-800 font-medium ${
                      project.category === "Productivity"
                        ? "border-l-4 border-green-500"
                        : project.category === "E-commerce"
                          ? "border-l-4 border-orange-500"
                          : project.category === "Utility"
                            ? "border-l-4 border-blue-500"
                            : project.category === "Analytics"
                              ? "border-l-4 border-purple-500"
                              : project.category === "Lifestyle"
                                ? "border-l-4 border-pink-500"
                                : project.category === "Finance"
                                  ? "border-l-4 border-emerald-500"
                                  : project.category === "Developer Tools"
                                    ? "border-l-4 border-indigo-500"
                                    : "border-l-4 border-red-500"
                    }`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{project.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{project.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{new Date(project.uploadDate).toLocaleDateString()}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs font-medium ${
                          index === 0
                            ? "border-blue-300 text-blue-700 bg-blue-50"
                            : index === 1
                              ? "border-purple-300 text-purple-700 bg-purple-50"
                              : "border-green-300 text-green-700 bg-green-50"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-600 bg-gray-50">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </main>
    </div>
  )
}