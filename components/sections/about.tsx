import { siteConfig } from "@/config/site"
import { InteractiveMap } from "@/components/interactive-map"

export function About() {
  return (
    <section id="about" className="container py-24 border-t">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            From{" "}
            <span className="text-foreground font-medium">
              {siteConfig.locations.from.name}, {siteConfig.locations.from.country} {siteConfig.locations.from.flag}
            </span>
            {", "}currently in{" "}
            <span className="text-foreground font-medium">
              {siteConfig.locations.current.name}, {siteConfig.locations.current.country} {siteConfig.locations.current.flag}
            </span>
            {". "}{siteConfig.personal.bio[0]}
          </p>
          {siteConfig.personal.bio.slice(1).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <InteractiveMap />

      </div>
    </section>
  )
}

