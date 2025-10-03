import { siteConfig } from "@/config/site"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Interests() {
  return (
    <section id="interests" className="container py-24 border-t">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interests</h2>
        <p className="text-lg text-muted-foreground mb-16 leading-relaxed">
          {siteConfig.interests.intro}
        </p>

        <div className="space-y-20">
          {/* Reading Section */}
          <div className="space-y-16">
            {/* Books */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-semibold">Books Worth Reading</h3>
                <Separator className="flex-1" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {siteConfig.interests.books.map((book, index) => (
                  <Link
                    key={index}
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 -m-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="font-medium">
                        {book.title}
                      </p>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {book.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Articles */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-semibold">Articles & Essays</h3>
                <Separator className="flex-1" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {siteConfig.interests.articles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 -m-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="font-medium">
                        {article.title}
                      </p>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {article.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* People I Follow */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-semibold">People I Follow</h3>
              <Separator className="flex-1" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.interests.people.map((person, index) => (
                <Link
                  key={index}
                  href={person.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 -m-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-medium">
                      {person.name}
                    </p>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {person.handle}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {person.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* When I'm Not Coding */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-semibold">When I&apos;m Not Coding</h3>
              <Separator className="flex-1" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {siteConfig.interests.hobbies}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

