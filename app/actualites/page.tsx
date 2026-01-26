import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Tag } from "lucide-react"

export const metadata = {
  title: "Actualités - SDMA TRUCKS | Nouveautés et Événements",
  description: "Suivez les dernières actualités de SDMA TRUCKS: nouveaux modèles, événements, salons agricoles et conseils pour votre exploitation.",
}

const newsCategories = [
  { id: "all", name: "Toutes" },
  { id: "nouveautes", name: "Nouveautés" },
  { id: "evenements", name: "Événements" },
  { id: "conseils", name: "Conseils" },
  { id: "entreprise", name: "Entreprise" },
]

const newsArticles = [
  {
    id: 1,
    title: "Nouveau TRUCKS Q Series : la révolution de la polyvalence",
    excerpt: "Découvrez le nouveau TRUCKS Q Series, conçu pour offrir une polyvalence inégalée dans tous les travaux agricoles. Avec sa transmission SmartTouch et sa cabine redessinée, il établit de nouveaux standards.",
    category: "nouveautes",
    date: "15 janvier 2026",
    image: "/images/news-new-model.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "SDMA présent au Salon de l'Agriculture 2026",
    excerpt: "Retrouvez-nous du 22 février au 2 mars au Salon International de l'Agriculture à Paris. Notre équipe sera présente pour vous faire découvrir les dernières innovations TRUCKS.",
    category: "evenements",
    date: "10 janvier 2026",
    image: "/images/news-salon.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Bienvenue à nos nouveaux techniciens",
    excerpt: "L'équipe SDMA s'agrandit ! Nous accueillons deux nouveaux techniciens certifiés TRUCKS pour renforcer notre service après-vente et réduire les délais d'intervention.",
    category: "entreprise",
    date: "5 janvier 2026",
    image: "/images/news-team.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Préparer son tracteur pour l'hiver : nos conseils",
    excerpt: "Les températures baissent, il est temps de préparer votre matériel agricole pour affronter l'hiver. Découvrez nos recommandations pour un hivernage réussi.",
    category: "conseils",
    date: "20 décembre 2025",
    image: "/images/workshop.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Offre spéciale fin d'année sur les occasions",
    excerpt: "Profitez de notre offre exceptionnelle sur une sélection de tracteurs d'occasion révisés et garantis. Des conditions de financement avantageuses vous attendent.",
    category: "nouveautes",
    date: "15 décembre 2025",
    image: "/images/valtra-t-series.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Journée portes ouvertes à Bannalec",
    excerpt: "Le 12 novembre, notre agence de Bannalec vous a ouvert ses portes pour une journée exceptionnelle de découverte et d'essais. Retour en images sur cet événement.",
    category: "evenements",
    date: "18 novembre 2025",
    image: "/images/hero-tractor.jpg",
    featured: false,
  },
]

export default function ActualitesPage() {
  const featuredArticles = newsArticles.filter(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-foreground text-card">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Actualités
            </h1>
            <p className="mt-4 text-lg text-card/80 leading-relaxed">
              Restez informé des dernières nouveautés TRUCKS, des événements à 
              venir et des conseils pour optimiser votre exploitation agricole.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-2">
            {newsCategories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === "all" ? "default" : "outline"}
                size="sm"
                className={category.id === "all" ? "bg-primary text-primary-foreground" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
            À la une
          </h2>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/actualites/${article.id}`}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        <Tag className="h-3 w-3" />
                        {newsCategories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-card/70">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-card group-hover:text-primary-foreground transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                    Lire la suite
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
            Toutes les actualités
          </h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article) => (
              <Link
                key={article.id}
                href={`/actualites/${article.id}`}
                className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-card/90 backdrop-blur-sm text-card-foreground rounded-full">
                      <Tag className="h-3 w-3" />
                      {newsCategories.find(c => c.id === article.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    Lire la suite
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Charger plus d&apos;articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Restez informé
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Inscrivez-vous à notre newsletter pour recevoir les dernières 
              actualités, offres spéciales et conseils directement dans votre boîte mail.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.fr"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                S&apos;inscrire
              </Button>
            </form>
            <p className="mt-4 text-sm text-primary-foreground/60">
              En vous inscrivant, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
