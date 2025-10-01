"use client"

import { useEffect, useMemo, useState } from "react"
import { siteConfig } from "@/config/site"

const LOCALE = "en-US" // Forzamos inglés para evitar mismatches por idioma

function formatInTZ(date: Date, tz: string, opts?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(LOCALE, { timeZone: tz, ...opts }).format(date)
}

export function TimeBadge() {
  const tz = siteConfig.personal.timezone || "UTC"
  const [now, setNow] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    setMounted(true)
    return () => clearInterval(id)
  }, [])

  const time = useMemo(
    () => formatInTZ(now, tz, { hour: "2-digit", minute: "2-digit", hour12: false }),
    [now, tz]
  )

  const day = useMemo(
    () => formatInTZ(now, tz, { weekday: "short" }),
    [now, tz]
  )

  return (
    <span
      suppressHydrationWarning
      title={`Local time in ${siteConfig.personal.location}`}
      className="text-xs px-2 py-1 rounded-md border text-muted-foreground hover:text-foreground transition-colors"
    >
      {mounted ? (
        <>{day} {time} {tz.replace("America/", "")}</>
      ) : (
        ""
      )}
    </span>
  )
}

export function ContactLocalTimeNote() {
  const tz = siteConfig.personal.timezone || "UTC"
  const [now, setNow] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    setMounted(true)
    return () => clearInterval(id)
  }, [])

  const time = formatInTZ(now, tz, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <p className="text-sm text-muted-foreground mt-6" suppressHydrationWarning>
      {mounted ? (
        <>It is {time} for me in {siteConfig.personal.location}. I usually reply within a day.</>
      ) : (
        ""
      )}
    </p>
  )
}


