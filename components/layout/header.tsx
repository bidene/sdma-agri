"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Produits",
    href: "/Produits",
    children: [
      { name: "Matériels agricoles", href: "/produits/materiels-agricoles" },
      { name: "Travaux publics - Matériels TP", href: "/produits/travaux-publics" },
      { name: "Manutention de matériaux", href: "/produits/manutention" },
      { name: "Transports", href: "/produits/transports" },
      { name: "Véhicules utilitaires", href: "/produits/vehicules-utilitaires" },
    ],
  },
  {
    name: "Services",
    href: "/Services",
    children: [
      { name: "Livraison / Paiement", href: "/services/livraison-paiement" },
      { name: "Suivi de commande", href: "/services/suivi-commande" },
      { name: "Réparation & Maintenance", href: "/services/reparation-maintenance" },
      { name: "Financement", href: "/services/financement" },
    ],
  },
  { name: "Nous contacter", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-sidebar text-sidebar-foreground">
      {/* Top bar */}
      <div className="border-b border-sidebar-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+33297334500" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>02 97 33 45 00</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sidebar-foreground/70">Morbihan</span>
            <span className="text-sidebar-foreground/40">|</span>
            <span className="text-sidebar-foreground/70">Lun-Ven: 8h30-12h / 14h-18h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">SDMA TRUCKS</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-sidebar-foreground/90 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className="cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-sidebar-foreground/90 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-sidebar-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-sidebar-border py-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
