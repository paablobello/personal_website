'use client'

import { useEffect } from 'react'

export function ScrollRestoration() {
  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Temporarily disable smooth scrolling for restoration
    document.documentElement.style.scrollBehavior = 'auto'

    // Restore scroll position on mount
    const scrollPos = sessionStorage.getItem('scrollPos')
    if (scrollPos) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(scrollPos, 10))
        // Re-enable smooth scrolling after restoration
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = ''
        }, 100)
      })
    } else {
      // Re-enable smooth scrolling if no restoration needed
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = ''
      }, 100)
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPos', window.scrollY.toString())
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return null
}

