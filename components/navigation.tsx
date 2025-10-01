"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Navigation() {
  return (
    <nav className="w-full py-6">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-lg font-medium hover:opacity-70 transition-opacity">
          {siteConfig.personal.name}
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Projects
          </Link>
          <Link 
            href="#experience" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Experience
          </Link>
          <Link 
            href="#education" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Education
          </Link>
          
          <div className="flex items-center gap-4 ml-4 border-l pl-4">
            {siteConfig.links.x && (
              <Link 
                href={siteConfig.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                {/* X logo (inline SVG to match style) */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2H21.5l-7.5 8.566L22.5 22h-6.094l-4.766-5.648L6.1 22H2.844l8.028-9.168L1.9 2h6.187l4.31 5.09L18.244 2zm-1.07 18h1.772L7.01 4H5.238l11.936 16z"/>
                </svg>
              </Link>
            )}
            <Link 
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href={siteConfig.links.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

