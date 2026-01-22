import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-tractor.jpg"
          alt="Tracteur VALTRA dans un champ agricole breton"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm border border-primary/30">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Concessionnaire officiel VALTRA
          </p>
          
          <h1 className="text-4xl font-bold tracking-tight text-card sm:text-5xl lg:text-6xl text-balance">
            Votre partenaire agricole en{" "}
            <span className="text-primary">Bretagne</span>
          </h1>
          
          <p className="mt-6 text-lg text-card/80 leading-relaxed max-w-xl">
            Depuis plus de 30 ans, SDMA Agri accompagne les agriculteurs du Finistère 
            et du Morbihan avec des solutions de matériel agricole performantes et un 
            service de proximité.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/produits">
                Découvrir nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-card/30 text-card hover:bg-card/10 bg-transparent"
            >
              <Link href="/contact">
                <Play className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-card/20 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                <span className="text-2xl font-bold text-card">30+</span>
              </div>
              <div className="text-sm text-card/70">
                <p className="font-semibold text-card">années</p>
                <p>d&apos;expérience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                <span className="text-2xl font-bold text-card">2</span>
              </div>
              <div className="text-sm text-card/70">
                <p className="font-semibold text-card">agences</p>
                <p>à votre service</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm">
                <span className="text-2xl font-bold text-card">500+</span>
              </div>
              <div className="text-sm text-card/70">
                <p className="font-semibold text-card">clients</p>
                <p>satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
