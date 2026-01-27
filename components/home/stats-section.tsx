"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: "30+", label: "Années d'innovation agricole" },
  { value: "2", label: "Showrooms expérimentaux" },
  { value: "500+", label: "Exploitations performantes" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            SDMA TRUCKS en chiffres
          </h2>
          <p className={`mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            Des années de savoir-faire au service de l&apos;agriculture bretonne
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm transition-all duration-1000 transform hover:scale-105 hover:bg-primary-foreground/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200 + 600}ms` : '0ms'
              }}
            >
              <p className={`text-4xl sm:text-5xl font-bold mb-2 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>{stat.value}</p>
              <p className={`text-primary-foreground/80 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
