import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Un service irréprochable depuis plus de 15 ans. L'équipe SDMA est toujours disponible et réactive, même en pleine saison.",
    author: "Jean-Pierre M.",
    role: "Agriculteur à Bannalec",
  },
  {
    quote: "J'ai acheté mon premier TRUCKS chez SDMA il y a 10 ans. Depuis, je n'ai jamais changé de concessionnaire. La qualité du service est exceptionnelle.",
    author: "Marie L.",
    role: "Éleveuse laitière",
  },
  {
    quote: "Les techniciens SDMA connaissent parfaitement les machines. Une intervention rapide qui m'a permis de reprendre les travaux en quelques heures.",
    author: "Yann B.",
    role: "Céréalier dans le Morbihan",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients agriculteurs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
              <p className="text-card-foreground leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
