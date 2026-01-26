import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Package, CreditCard, Clock, CheckCircle2, Phone, Truck } from "lucide-react"

export const metadata = {
  title: "Services - SDMA TRUCKS | Atelier, Pièces détachées, Financement",
  description: "Découvrez nos services: atelier de réparation certifié, pièces détachées d'origine, solutions de financement. Service après-vente de qualité en Bretagne.",
}

const services = [
  {
    id: "atelier",
    icon: Wrench,
    title: "Atelier & Réparation",
    description: "Notre atelier est équipé des dernières technologies de diagnostic pour assurer l'entretien et la réparation de tous vos équipements agricoles TRUCKS et autres marques.",
    image: "/images/workshop.jpg",
    features: [
      "Diagnostic électronique complet",
      "Réparation mécanique et hydraulique",
      "Entretien préventif et révisions",
      "Intervention sur site possible",
      "Techniciens certifiés TRUCKS",
      "Garantie sur les réparations",
    ],
  },
  {
    id: "pieces",
    icon: Package,
    title: "Pièces détachées",
    description: "Un stock permanent de plus de 5000 références de pièces d'origine TRUCKS et adaptables. Commande express pour les pièces non disponibles avec livraison sous 24-48h.",
    image: "/images/parts.jpg",
    features: [
      "Stock permanent de pièces courantes",
      "Pièces d'origine garanties",
      "Commande express sous 24-48h",
      "Livraison dans tout le Morbihan",
      "Conseil technique personnalisé",
      "Tarifs compétitifs",
    ],
  },
  {
    id: "financement",
    icon: CreditCard,
    title: "Financement",
    description: "Des solutions de financement sur mesure pour accompagner vos projets d'investissement. Crédit-bail, location longue durée ou crédit classique selon vos besoins.",
    image: "/images/field-work.jpg",
    features: [
      "Crédit-bail (leasing)",
      "Location longue durée (LLD)",
      "Crédit classique",
      "Simulation gratuite",
      "Accompagnement personnalisé",
      "Partenaires bancaires de confiance",
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Prise de contact",
    description: "Appelez-nous ou remplissez notre formulaire en ligne pour décrire votre besoin.",
  },
  {
    step: "02",
    title: "Diagnostic",
    description: "Nos techniciens analysent votre demande et établissent un devis détaillé.",
  },
  {
    step: "03",
    title: "Intervention",
    description: "Réparation en atelier ou sur site selon la nature de l'intervention.",
  },
  {
    step: "04",
    title: "Suivi",
    description: "Contrôle qualité et suivi après intervention pour votre satisfaction.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-foreground text-card">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Nos services
            </h1>
            <p className="mt-4 text-lg text-card/80 leading-relaxed">
              Un accompagnement complet pour optimiser les performances de votre 
              exploitation agricole. De l&apos;entretien à la réparation, en passant 
              par le financement de vos équipements.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:+33297334500">
                  <Phone className="mr-2 h-5 w-5" />
                  02 97 33 45 00
                </a>
              </Button>
              <div className="flex items-center gap-2 text-card/70">
                <Clock className="h-5 w-5" />
                <span>Lun-Ven: 8h30-18h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact">
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl bg-primary/10 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Notre processus d&apos;intervention
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour vous garantir un service de qualité
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center p-6"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section id="sav" className="py-20 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="h-8 w-8" />
                <span className="text-sm font-semibold uppercase tracking-wider">Service après-vente</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Intervention d&apos;urgence en saison
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80 leading-relaxed">
                Nous savons à quel point chaque heure compte pendant les périodes de 
                travaux agricoles. Notre équipe est mobilisée pour intervenir rapidement 
                en cas de panne, afin de minimiser vos temps d&apos;arrêt.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  <span>Intervention rapide sur site</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  <span>Stock de pièces disponible</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  <span>Équipe expérimentée et réactive</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary-foreground/10 rounded-2xl p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2">Appelez-nous</p>
              <a 
                href="tel:+33297334500" 
                className="text-4xl sm:text-5xl font-bold hover:text-primary transition-colors"
              >
                02 97 33 45 00
              </a>
              <p className="mt-4 text-secondary-foreground/70">
                Du lundi au vendredi de 8h30 à 18h
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">
                  Formulaire de contact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
