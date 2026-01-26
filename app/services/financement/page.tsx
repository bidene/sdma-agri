export default function FinancementPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Financement</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Solutions de financement adaptées pour l'acquisition de vos matériels agricoles et de travaux publics.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-primary">💳</span>
            <h3 className="text-xl font-semibold">Crédit Bail</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Solution de location avec option d'achat pour préserver votre trésorerie.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Loyers 100% déductibles</li>
            <li>• Pas d'apport personnel requis</li>
            <li>• Durée de 24 à 84 mois</li>
            <li>• TVA récupérable sur les loyers</li>
          </ul>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-primary">📈</span>
            <h3 className="text-xl font-semibold">Crédit Classique</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Financement par emprunt avec amortissement du matériel sur votre bilan.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Taux compétitifs dès 2,9%</li>
            <li>• Possibilité d'apport personnel</li>
            <li>• Durée jusqu'à 96 mois</li>
            <li>• Amortissement fiscal</li>
          </ul>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-primary">🛡️</span>
            <h3 className="text-xl font-semibold">Location Longue Durée</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Solution tout compris pour une tranquillité d'esprit totale.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Entretien inclus</li>
            <li>• Assurance comprise</li>
            <li>• Remplacement en cas de panne</li>
            <li>• Loyers fixes mensuels</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-4xl mr-3 text-primary">🧮</span>
            Simulateur de Financement
          </h2>
          
          <div className="bg-muted rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Montant du matériel (€)</label>
                <input
                  type="number"
                  placeholder="50000"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Type de financement</label>
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Crédit Bail</option>
                  <option>Crédit Classique</option>
                  <option>Location Longue Durée</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Durée (mois)</label>
                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>24 mois</option>
                  <option>36 mois</option>
                  <option>48 mois</option>
                  <option>60 mois</option>
                  <option>72 mois</option>
                  <option>84 mois</option>
                  <option>96 mois</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Apport personnel (€)</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Calculer mes mensualités
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-4xl mr-3 text-primary">✅</span>
            Avantages et Garanties
          </h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">📊</span>
                <h4 className="font-medium">Taux Préférentiels</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Négociés avec nos partenaires bancaires spécialisés dans le matériel agricole.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">🛡️</span>
                <h4 className="font-medium">Assurance Omnium</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Protection complète contre le vol, l'incendie et les dommages accidentels.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">📄</span>
                <h4 className="font-medium">Dossier Simplifié</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Réponse sous 48h avec documents minimales à fournir.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2 text-green-600">📈</span>
                <h4 className="font-medium">Flexibilité</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Possibilité de moduler les mensualités selon vos revenus saisonniers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-card border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Exemples de Financement</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Tracteur 150 CV</h4>
            <p className="text-2xl font-bold text-primary mb-2">85 000 €</p>
            <p className="text-sm text-muted-foreground mb-3">Crédit Bail - 60 mois</p>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Loyer mensuel :</span>
                <span className="font-medium">1 450 € HT</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>1er loyer majoré :</span>
                <span className="font-medium">4 350 € HT</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Moissonneuse-batteuse</h4>
            <p className="text-2xl font-bold text-primary mb-2">250 000 €</p>
            <p className="text-sm text-muted-foreground mb-3">Crédit Classique - 84 mois</p>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Mensualité :</span>
                <span className="font-medium">3 200 €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taux :</span>
                <span className="font-medium">3,2%</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Chargeur frontal</h4>
            <p className="text-2xl font-bold text-primary mb-2">45 000 €</p>
            <p className="text-sm text-muted-foreground mb-3">LLD - 48 mois</p>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Loyer mensuel :</span>
                <span className="font-medium">850 € TTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Entretien inclus</span>
                <span className="font-medium text-green-600">Oui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="text-2xl mr-2 text-blue-600">📄</span>
            Documents Requis
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>• Kbis de l'entreprise (datant de moins de 3 mois)</li>
            <li>• Derniers bilans comptables</li>
            <li>• Déclaration de TVA</li>
            <li>• Carte d'identité du gérant</li>
            <li>• RIB de l'entreprise</li>
            <li>• Devis du matériel à financer</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="text-2xl mr-2 text-green-600">📞</span>
            Contact Financement
          </h3>
          <p className="text-green-800 mb-3">
            Notre conseiller financier étudie votre dossier et vous propose la solution la plus adaptée.
          </p>
          <div className="space-y-2">
            <p className="text-green-800">
              <span className="font-medium">Téléphone :</span> 04 72 00 00 02
            </p>
            <p className="text-green-800">
              <span className="font-medium">Email :</span> financement@sdma-agri.fr
            </p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Être rappelé
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
