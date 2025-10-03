import Link from "next/link"
import { siteConfig } from "@/config/site"
import { ContactLocalTimeNote } from "@/components/time-indicator"

export function Contact() {
  return (
    <section id="contact" className="container py-24 border-t">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          I&apos;m always open to new opportunities, collaborations, or just chatting about tech.
          You can reach me via{" "}
          <Link 
            href={siteConfig.links.email} 
            className="text-foreground underline decoration-muted-foreground hover:decoration-foreground transition-colors"
          >
            email
          </Link>{" "}
          or find me on{" "}
          <Link 
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-muted-foreground hover:decoration-foreground transition-colors"
          >
            LinkedIn
          </Link>
          {", "}
          <Link 
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-muted-foreground hover:decoration-foreground transition-colors"
          >
            X
          </Link>
          {". "}
        </p>

        <ContactLocalTimeNote />

        <footer className="mt-24 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.personal.name}.
          </p>
        </footer>
      </div>
    </section>
  )
}

