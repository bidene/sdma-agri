export default function LivraisonPaiementPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Livraison et Paiement</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez nos solutions de livraison et nos options de paiement sécurisées.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-4xl mr-3">🚚</span>
            Options de Livraison
          </h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">⏰</span>
                <h3 className="text-xl font-semibold">Livraison Standard</h3>
              </div>
              <p className="text-muted-foreground mb-2">Délai : 5-7 jours ouvrés</p>
              <p className="text-muted-foreground">Livraison à domicile ou sur chantier pour tous vos équipements.</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🚚</span>
                <h3 className="text-xl font-semibold">Livraison Express</h3>
              </div>
              <p className="text-muted-foreground mb-2">Délai : 24-48h</p>
              <p className="text-muted-foreground">Service rapide pour les pièces détachées et équipements disponibles.</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">📍</span>
                <h3 className="text-xl font-semibold">Retrait en Agence</h3>
              </div>
              <p className="text-muted-foreground mb-2">Immédiat</p>
              <p className="text-muted-foreground">Venez récupérer votre matériel directement dans nos locaux.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-4xl mr-3">💳</span>
            Moyens de Paiement
          </h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">💳</span>
                <h3 className="text-xl font-semibold">Cartes Bancaires</h3>
              </div>
              <p className="text-muted-foreground">Visa, Mastercard, American Express acceptées.</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">📦</span>
                <h3 className="text-xl font-semibold">Financement</h3>
              </div>
              <p className="text-muted-foreground">Solutions de crédit et leasing adaptées à vos besoins.</p>
            </div>
            
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">🛡️</span>
                <h3 className="text-xl font-semibold">Paiement Sécurisé</h3>
              </div>
              <p className="text-muted-foreground">Transactions protégées et cryptées pour votre sécurité.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Conditions Générales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Livraison</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Livraison gratuite pour toute commande supérieure à 5000€</li>
              <li>• Vérification du matériel avant expédition</li>
              <li>• Suivi de commande en temps réel</li>
              <li>• Assurance transport incluse</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Paiement</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Paiement sécurisé via notre partenaire bancaire</li>
              <li>• Devis personnalisés sur demande</li>
              <li>• Conditions de paiement adaptées aux professionnels</li>
              <li>• Garantie satisfait ou remboursé 30 jours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
