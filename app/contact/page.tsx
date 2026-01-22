"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

const agencies = [
  {
    id: "bannalec",
    name: "SDMA Bannalec",
    address: "Zone Artisanale de Kerangonan",
    city: "29380 Bannalec",
    department: "Finistère",
    phone: "02 98 06 60 00",
    email: "bannalec@sdma-agri.fr",
    hours: "Lun-Ven: 8h30-12h / 14h-18h",
    coordinates: { lat: 47.9289, lng: -3.6978 },
  },
  {
    id: "plouay",
    name: "SDMA Plouay",
    address: "Zone Industrielle du Plassart",
    city: "56240 Plouay",
    department: "Morbihan",
    phone: "02 97 33 45 00",
    email: "plouay@sdma-agri.fr",
    hours: "Lun-Ven: 8h30-12h / 14h-18h",
    coordinates: { lat: 47.9103, lng: -3.3381 },
  },
]

const subjects = [
  { value: "devis", label: "Demande de devis" },
  { value: "info", label: "Demande d'information" },
  { value: "rdv", label: "Prise de rendez-vous" },
  { value: "sav", label: "Service après-vente" },
  { value: "pieces", label: "Pièces détachées" },
  { value: "autre", label: "Autre" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agency: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-foreground text-card">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contactez-nous
            </h1>
            <p className="mt-4 text-lg text-card/80 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos 
              questions et vous accompagner dans vos projets d&apos;équipement agricole.
            </p>
          </div>
        </div>
      </section>

      {/* Agencies */}
      <section id="agences" className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
            Nos agences
          </h2>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {agencies.map((agency) => (
              <div
                key={agency.id}
                className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                        {agency.department}
                      </span>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {agency.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-card-foreground">{agency.address}</p>
                        <p className="text-muted-foreground">{agency.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      <a 
                        href={`tel:${agency.phone.replace(/\s/g, "")}`}
                        className="text-card-foreground hover:text-primary transition-colors"
                      >
                        {agency.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0" />
                      <a 
                        href={`mailto:${agency.email}`}
                        className="text-card-foreground hover:text-primary transition-colors"
                      >
                        {agency.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{agency.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${agency.coordinates.lat},${agency.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Voir sur Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Envoyez-nous un message
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Remplissez le formulaire ci-contre et nous vous répondrons dans 
                les meilleurs délais. Vous pouvez également nous contacter directement 
                par téléphone.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <a 
                      href="tel:+33298066000" 
                      className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors"
                    >
                      02 98 06 60 00
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:contact@sdma-agri.fr" 
                      className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors"
                    >
                      contact@sdma-agri.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horaires</p>
                    <p className="text-lg font-semibold text-card-foreground">
                      Lun-Ven: 8h30-12h / 14h-18h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl border border-border p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <Button 
                    className="mt-8"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        agency: "",
                        subject: "",
                        message: "",
                      })
                    }}
                  >
                    Envoyer un nouveau message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="votre@email.fr"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="06 00 00 00 00"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="agency">Agence</Label>
                      <Select
                        value={formState.agency}
                        onValueChange={(value) => setFormState({ ...formState, agency: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir une agence" />
                        </SelectTrigger>
                        <SelectContent>
                          {agencies.map((agency) => (
                            <SelectItem key={agency.id} value={agency.id}>
                              {agency.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Select
                        value={formState.subject}
                        onValueChange={(value) => setFormState({ ...formState, subject: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Décrivez votre demande..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * Champs obligatoires. Vos données sont traitées conformément à notre{" "}
                    <a href="/politique-confidentialite" className="underline hover:text-foreground">
                      politique de confidentialité
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
