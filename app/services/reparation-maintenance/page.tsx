export default function ReparationMaintenancePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Réparation et Maintenance</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Services complets de réparation et d'entretien pour tous vos matériels agricoles et de travaux publics.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-primary">🔧</span>
            <h3 className="text-xl font-semibold">Réparation</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Diagnostic et réparation rapide de tous vos équipements par nos techniciens qualifiés.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Moteurs et transmissions</li>
            <li>• Systèmes hydrauliques</li>
            <li>• Électronique embarquée</li>
            <li>• Carrosserie et châssis</li>
          </ul>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-primary">⏰</span>
            <h3 className="text-xl font-semibold">Maintenance Préventive</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Entretien régulier pour prévenir les pannes et optimiser la durée de vie de vos matériels.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Vidanges et filtres</li>
            <li>• Contrôles périodiques</li>
            <li>• Réglages et calibrages</li>
            <li>• Mises à jour logicielles</li>
          </ul>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-primary">🛡️</span>
            <h3 className="text-xl font-semibold">Contrats de Service</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Solutions sur mesure pour la gestion complète de votre parc matériel.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Contrats annuels</li>
            <li>• Interventions prioritaires</li>
            <li>• Pièces d'origine garanties</li>
            <li>• Suivi personnalisé</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-4xl mr-3 text-primary">🚚</span>
            Intervention sur Site
          </h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">✅</span>
                <h4 className="font-medium">Déplacement rapide</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Intervention sous 24h pour les urgences dans un rayon de 100km.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">✅</span>
                <h4 className="font-medium">Atelier mobile équipé</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Véhicules d'intervention avec outillage complet et pièces détachées.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">✅</span>
                <h4 className="font-medium">Diagnostic sur place</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Évaluation complète et devis immédiat sans frais de déplacement.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-4xl mr-3 text-primary">📅</span>
            Planification et Urgences
          </h2>
          
          <div className="bg-muted rounded-lg p-6 mb-4">
            <h3 className="font-semibold mb-3">Horaires d'intervention</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lundi - Vendredi :</span>
                <span className="font-medium">8h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi :</span>
                <span className="font-medium">9h - 12h</span>
              </div>
              <div className="flex justify-between">
                <span>Urgences 24/7 :</span>
                <span className="font-medium text-red-600">06 12 34 56 78</span>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <span className="text-2xl mr-2 text-red-600 mt-0.5">⚠️</span>
              <div>
                <h4 className="font-medium text-red-900 mb-1">Service d'Urgence</h4>
                <p className="text-red-800 text-sm">
                  Pour les pannes immobilisantes, notre équipe d'intervention est disponible 
                  24h/24 et 7j/7. Surcoût de 30% applicable les nuits et week-ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-card border rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Nos Compétences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl text-primary">🔧</span>
            </div>
            <h4 className="font-medium mb-2">Mécanique</h4>
            <p className="text-sm text-muted-foreground">Moteurs, boîtes, transmissions</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl text-primary">🚚</span>
            </div>
            <h4 className="font-medium mb-2">Hydraulique</h4>
            <p className="text-sm text-muted-foreground">Vérins, pompes, distributeurs</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl text-primary">🛡️</span>
            </div>
            <h4 className="font-medium mb-2">Électricité</h4>
            <p className="text-sm text-muted-foreground">Câblage, électronique, GPS</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl text-primary">✅</span>
            </div>
            <h4 className="font-medium mb-2">Soudure</h4>
            <p className="text-sm text-muted-foreground">Châssis, carrosserie, adaptations</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <span className="text-2xl mr-3 text-blue-600 mt-0.5">📞</span>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Contactez notre service technique</h4>
              <p className="text-blue-800">
                Pour prendre rendez-vous ou une demande d'intervention : 
                <span className="font-medium ml-2">04 72 00 00 01</span>
              </p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  )
}
