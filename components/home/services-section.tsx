import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Package, CreditCard } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Atelier & Réparation",
    description: "Notre équipe de techniciens certifiés assure l'entretien et la réparation de tous vos équipements agricoles.",
    image: "/images/workshop.jpg",
    href: "/services#atelier",
    features: ["Diagnostic complet", "Réparation sur site", "Entretien préventif"],
  },
  {
    icon: Package,
    title: "Pièces détachées",
    description: "Un large stock de pièces d'origine VALTRA et adaptables disponibles immédiatement.",
    image: "/images/parts.jpg",
    href: "/services#pieces",
    features: ["Stock permanent", "Commande express", "Pièces d'origine"],
  },
  {
    icon: CreditCard,
    title: "Financement",
    description: "Des solutions de financement adaptées à vos projets d'investissement agricole.",
    image: "/images/field-work.jpg",
    href: "/services#financement",
    features: ["Crédit-bail", "Location longue durée", "Solutions personnalisées"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nos services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement complet pour optimiser votre exploitation agricole
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors bg-transparent">
                  <Link href={service.href}>
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
