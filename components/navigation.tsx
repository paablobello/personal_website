"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
// import { FileText } from "lucide-react" // TODO: Descomentar cuando se active el botón de Resume
import { siteConfig } from "@/config/site"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Aparece el borde cuando scrolleas más de 10px
      setIsScrolled(window.scrollY > 10)
    }

    // Listener para el scroll
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 w-full py-6 transition-all duration-300
        ${isScrolled 
          ? 'bg-background/75 backdrop-blur-2xl border-b shadow-sm supports-[backdrop-filter]:bg-background/75' 
          : 'bg-transparent'
        }
      `}
      style={isScrolled ? {
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        backdropFilter: 'saturate(180%) blur(20px)',
        willChange: 'backdrop-filter',
      } : undefined}
    >
      <div className="container flex items-center justify-between">
        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="#experience" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </Link>
          <Link 
            href="#education" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Education
          </Link>
        </div>
        
        {/* Resume + Social Links */}
        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          {/* Resume - More prominent on mobile */}
          {/* TODO: Descomentar cuando el CV esté listo */}
          {/* <Link 
            href={siteConfig.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            <FileText className="h-5 w-5 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Resume</span>
          </Link> */}
          
          {/* Social Links - Optimized for mobile touch targets */}
          <div className="flex items-center gap-4 md:gap-4">
            <Link 
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1 -m-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1 -m-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {siteConfig.links.x && (
              <Link 
                href={siteConfig.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 -m-1"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2H21.5l-7.5 8.566L22.5 22h-6.094l-4.766-5.648L6.1 22H2.844l8.028-9.168L1.9 2h6.187l4.31 5.09L18.244 2zm-1.07 18h1.772L7.01 4H5.238l11.936 16z"/>
                </svg>
              </Link>
            )}
            {/* Email hidden on mobile - available in contact section */}
            <Link 
              href={siteConfig.links.email}
              className="hidden md:block text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

