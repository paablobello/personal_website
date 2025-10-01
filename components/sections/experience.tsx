import { siteConfig } from "@/config/site"

export function Experience() {
  return (
    <section id="experience" className="container py-24 border-t">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-12">
          {siteConfig.experience.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground/40 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

