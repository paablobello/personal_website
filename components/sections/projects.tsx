import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Projects() {
  return (
    <section id="projects" className="container py-24 border-t">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Projects</h2>
        
        <div className="space-y-12">
          {siteConfig.projects.map((project, index) => (
            <Link 
              key={index}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {project.highlights && (
                <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

