import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl text-balance">
              Prêt à optimiser votre exploitation ?
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80 leading-relaxed">
              Contactez-nous pour discuter de vos besoins en matériel agricole. 
              Nos conseillers sont à votre écoute pour vous proposer les meilleures solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
              >
                <a href="tel:+33298066000">
                  <Phone className="mr-2 h-5 w-5" />
                  02 98 06 60 00
                </a>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-secondary-foreground/5" />
          <div className="absolute bottom-0 right-20 -mb-10 h-40 w-40 rounded-full bg-secondary-foreground/5" />
        </div>
      </div>
    </section>
  )
}
