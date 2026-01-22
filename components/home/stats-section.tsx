const stats = [
  { value: "30+", label: "Années d'expérience" },
  { value: "500+", label: "Clients satisfaits" },
  { value: "2", label: "Agences en Bretagne" },
  { value: "15", label: "Techniciens certifiés" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            SDMA Agri en chiffres
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Des années de savoir-faire au service de l&apos;agriculture bretonne
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
            >
              <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
