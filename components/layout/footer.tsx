import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react"

const footerLinks = {
  produits: [
    { name: "Tracteurs TRUCKS", href: "/produits/tracteurs" },
    { name: "Matériel de récolte", href: "/produits/recolte" },
    { name: "Travail du sol", href: "/produits/travail-sol" },
    { name: "Occasions", href: "/produits/occasions" },
  ],
  services: [
    { name: "Atelier & Réparation", href: "/services#atelier" },
    { name: "Pièces détachées", href: "/services#pieces" },
    { name: "Financement", href: "/services#financement" },
    { name: "Service après-vente", href: "/services#sav" },
  ],
  entreprise: [
    { name: "À propos", href: "/a-propos" },
    { name: "Nos agences", href: "/contact#agences" },
    { name: "Actualités", href: "/actualites" },
    { name: "Recrutement", href: "/recrutement" },
  ],
}

const agencies = [
  {
    name: "SDMA Entraigues",
    address: "Avenue des Valayans, 84320 Entraigues-sur-la-Sorgue",
    phone: "02 97 33 45 00",
  },
]

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">SDMA TRUCKS</span>
              </div>
            </Link>
            <p className="text-sidebar-foreground/70 leading-relaxed mb-6 max-w-sm">
              Votre partenaire de confiance pour le matériel agricole dans le Vaucluse depuis plus de 30 ans.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Produits</h3>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              {agencies.map((agency) => (
                <li key={agency.name} className="text-sm">
                  <p className="font-medium text-sidebar-foreground">{agency.name}</p>
                  <p className="text-sidebar-foreground/70 flex items-start gap-2 mt-1">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    {agency.address}
                  </p>
                  <p className="text-sidebar-foreground/70 flex items-center gap-2 mt-1">
                    <Phone className="h-4 w-4 shrink-0" />
                    {agency.phone}
                  </p>
                </li>
              ))}
              <li className="flex items-center gap-2 text-sidebar-foreground/70">
                <Clock className="h-4 w-4 shrink-0" />
                <span className="text-sm">Lun-Ven: 8h30-12h / 14h-18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sidebar-border">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-sidebar-foreground/60">
            <p>&copy; {new Date().getFullYear()} SDMA TRUCKS. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="hover:text-sidebar-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-sidebar-foreground transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
