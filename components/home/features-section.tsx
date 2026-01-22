import { Wrench, Truck, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Atelier certifié",
    description: "Nos techniciens sont formés et certifiés par VALTRA pour garantir un service de qualité optimale.",
  },
  {
    icon: Truck,
    title: "Livraison rapide",
    description: "Livraison de vos équipements et pièces détachées dans tout le Finistère et le Morbihan.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Intervention rapide sur site ou en atelier pour minimiser vos temps d'arrêt en saison.",
  },
  {
    icon: Shield,
    title: "Garantie constructeur",
    description: "Tous nos équipements neufs sont couverts par la garantie officielle VALTRA.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pourquoi choisir SDMA Agri ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un service complet pour répondre à tous vos besoins en matériel agricole
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
