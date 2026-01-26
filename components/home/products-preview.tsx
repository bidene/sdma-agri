import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "TRUCKS N Series",
    category: "Tracteurs polyvalents",
    power: "125-220 ch",
    image: "/images/hero-tractor.jpg",
    href: "/produits/tracteurs/n-series",
  },
  {
    id: 2,
    name: "TRUCKS T Series",
    category: "Tracteurs haute puissance",
    power: "175-271 ch",
    image: "/images/field-work.jpg",
    href: "/produits/tracteurs/t-series",
  },
  {
    id: 3,
    name: "TRUCKS A Series",
    category: "Tracteurs compacts",
    power: "75-130 ch",
    image: "/images/hero-tractor.jpg",
    href: "/produits/tracteurs/a-series",
  },
]

export function ProductsPreview() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nos gammes de tracteurs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Découvrez notre sélection de tracteurs TRUCKS, conçus pour répondre 
              à toutes les exigences de l&apos;agriculture moderne.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 bg-transparent">
            <Link href="/produits">
              Voir tous les produits
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-card">{product.name}</h3>
                  <p className="text-card/80 text-sm mt-1">{product.power}</p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Découvrir la gamme
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
