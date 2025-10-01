import { siteConfig } from "@/config/site"
import Link from "next/link"

export function Interests() {
  return (
    <section id="interests" className="container py-24 border-t bg-muted/50">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interests</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          {siteConfig.interests.intro}
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Books */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Books I Recommend</h3>
            <div className="space-y-4">
              {siteConfig.interests.books.map((book, index) => (
                <div key={index}>
                  <p className="font-medium">{book.title}</p>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Twitter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Accounts I Follow</h3>
            <div className="space-y-3">
              {siteConfig.interests.twitter.map((account, index) => (
                <Link
                  key={index}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-medium">{account.name}</span>
                  <span className="text-sm"> {account.handle}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">When I'm Not Coding</h3>
            <div className="flex flex-wrap gap-3">
              {siteConfig.interests.hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="text-sm text-muted-foreground"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

