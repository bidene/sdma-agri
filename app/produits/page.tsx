import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
  title: "Produits - SDMA Agri | Tracteurs VALTRA et Matériel Agricole",
  description: "Découvrez notre gamme complète de tracteurs VALTRA et matériel agricole. Neufs et occasions disponibles dans nos agences du Finistère et Morbihan.",
}

const categories = [
  {
    id: "tracteurs",
    name: "Tracteurs VALTRA",
    description: "Une gamme complète de tracteurs pour tous vos besoins",
    image: "/images/hero-tractor.jpg",
    href: "/produits/tracteurs",
    count: 24,
  },
  {
    id: "recolte",
    name: "Matériel de récolte",
    description: "Moissonneuses, ensileuses et équipements de récolte",
    image: "/images/harvester.jpg",
    href: "/produits/recolte",
    count: 12,
  },
  {
    id: "travail-sol",
    name: "Travail du sol",
    description: "Charrues, cultivateurs et outils de préparation du sol",
    image: "/images/field-work.jpg",
    href: "/produits/travail-sol",
    count: 18,
  },
  {
    id: "occasions",
    name: "Occasions",
    description: "Matériel d'occasion révisé et garanti",
    image: "/images/workshop.jpg",
    href: "/produits/occasions",
    count: 35,
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "VALTRA N155e",
    category: "Tracteurs",
    series: "N Series",
    power: "155 ch",
    price: "Sur demande",
    image: "/images/valtra-n-series.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "VALTRA T235",
    category: "Tracteurs",
    series: "T Series",
    power: "235 ch",
    price: "Sur demande",
    image: "/images/valtra-t-series.jpg",
    isNew: true,
  },
  {
    id: 3,
    name: "VALTRA A115",
    category: "Tracteurs",
    series: "A Series",
    power: "115 ch",
    price: "Sur demande",
    image: "/images/valtra-a-series.jpg",
    isNew: false,
  },
  {
    id: 4,
    name: "VALTRA T195",
    category: "Tracteurs",
    series: "T Series",
    power: "195 ch",
    price: "65 000 EUR",
    image: "/images/valtra-t-series.jpg",
    isNew: false,
    isOccasion: true,
    year: 2021,
    hours: 2500,
  },
  {
    id: 5,
    name: "VALTRA N134",
    category: "Tracteurs",
    series: "N Series",
    power: "134 ch",
    price: "48 000 EUR",
    image: "/images/valtra-n-series.jpg",
    isNew: false,
    isOccasion: true,
    year: 2019,
    hours: 3200,
  },
  {
    id: 6,
    name: "VALTRA A104",
    category: "Tracteurs",
    series: "A Series",
    power: "104 ch",
    price: "Sur demande",
    image: "/images/valtra-a-series.jpg",
    isNew: true,
  },
]

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <>
        {/* Hero */}
        <section className="relative py-20 bg-foreground text-card">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Nos produits
              </h1>
              <p className="mt-4 text-lg text-card/80 leading-relaxed">
                Découvrez notre gamme complète de matériel agricole VALTRA. 
                Des tracteurs performants aux équipements spécialisés, nous avons 
                la solution pour votre exploitation.
              </p>
            </div>
            
            {/* Search */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher un produit..." 
                  className="pl-10 bg-card text-card-foreground"
                />
              </div>
              <Button variant="outline" className="border-card/30 text-card hover:bg-card/10 bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Filtrer
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
              Catégories
            </h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-card">{category.name}</h3>
                      <p className="text-sm text-card/70 mt-1">{category.count} produits</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Produits à la une
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground border-primary">
                  Tous
                </Button>
                <Button variant="outline" size="sm">
                  Neufs
                </Button>
                <Button variant="outline" size="sm">
                  Occasions
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.isNew && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          Nouveau
                        </span>
                      )}
                      {product.isOccasion && (
                        <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                          Occasion
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{product.series}</p>
                        <h3 className="text-lg font-bold text-card-foreground mt-1">{product.name}</h3>
                      </div>
                      <span className="text-sm font-semibold text-primary">{product.power}</span>
                    </div>
                    
                    {product.isOccasion && (
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span>{product.year}</span>
                        <span>{product.hours} h</span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="font-semibold text-card-foreground">{product.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Voir détails
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/produits/tous">
                  Voir tous les produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4">
            <div className="rounded-3xl bg-primary p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Vous ne trouvez pas ce que vous cherchez ?
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
                Contactez-nous pour discuter de vos besoins spécifiques. 
                Nous pouvons vous aider à trouver le matériel idéal pour votre exploitation.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </>
    </Suspense>
  )
}
