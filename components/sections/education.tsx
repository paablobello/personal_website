import { siteConfig } from "@/config/site"

export function Education() {
  return (
    <section id="education" className="container py-24 border-t">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
        
        <div className="space-y-12">
          {siteConfig.education.map((edu, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {edu.description}
              </p>
              
              <ul className="space-y-2">
                {edu.highlights.map((highlight, i) => (
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

