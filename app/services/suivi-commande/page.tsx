export default function SuiviCommandePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Suivi de Commande</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Suivez l'état de votre commande en temps réel et retrouvez toutes les informations sur votre livraison.
      </p>
      
      <div className="bg-card border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-4xl mr-3">🔍</span>
          Rechercher votre commande
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Numéro de commande (ex: CMD-2024-001234)"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Rechercher
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-blue-600">📦</span>
            <h3 className="text-lg font-semibold">En Préparation</h3>
          </div>
          <p className="text-muted-foreground">Votre commande est en cours de préparation dans nos entrepôts.</p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-orange-600">🚚</span>
            <h3 className="text-lg font-semibold">En Transit</h3>
          </div>
          <p className="text-muted-foreground">Votre commande a été expédiée et est en cours de livraison.</p>
        </div>
        
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3 text-green-600">✅</span>
            <h3 className="text-lg font-semibold">Livrée</h3>
          </div>
          <p className="text-muted-foreground">Votre commande a été livrée avec succès.</p>
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Exemple de Suivi de Commande</h2>
        
        <div className="bg-card border rounded-lg p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Commande CMD-2024-001234</h3>
              <p className="text-muted-foreground">Date : 15/01/2024</p>
            </div>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              En Transit
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-2xl mr-3 text-green-600 mt-0.5">✅</span>
              <div className="flex-1">
                <p className="font-medium">Commande confirmée</p>
                <p className="text-sm text-muted-foreground">15/01/2024 - 14:30</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3 text-green-600 mt-0.5">✅</span>
              <div className="flex-1">
                <p className="font-medium">En préparation</p>
                <p className="text-sm text-muted-foreground">16/01/2024 - 09:15</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3 text-orange-600 mt-0.5">⏰</span>
              <div className="flex-1">
                <p className="font-medium">Expédiée</p>
                <p className="text-sm text-muted-foreground">17/01/2024 - 16:45</p>
              </div>
            </div>
            
            <div className="flex items-start opacity-50">
              <div className="h-5 w-5 mr-3 border-2 border-gray-300 rounded-full mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">Livrée</p>
                <p className="text-sm text-muted-foreground">Prévue : 19/01/2024</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <span className="text-2xl mr-2 text-primary">📍</span>
              Adresse de Livraison
            </h4>
            <p className="text-muted-foreground">
              123 Route de l'Agriculture<br />
              69000 Lyon<br />
              France
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 flex items-center">
              <span className="text-2xl mr-2 text-primary">📦</span>
              Détails de la Commande
            </h4>
            <p className="text-muted-foreground">
              Tracteur agricole John Deere 6120M<br />
              1x Charrue 4 sillons<br />
              2x Semoirs à céréales
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <span className="text-2xl mr-3 text-blue-600 mt-0.5">⚠️</span>
          <div>
            <h4 className="font-medium text-blue-900 mb-2">Besoin d'aide ?</h4>
            <p className="text-blue-800">
              Pour toute question sur votre commande, contactez notre service client au 
              <span className="font-medium"> 04 72 00 00 00</span> ou par email à 
              <span className="font-medium"> service-client@sdma-agri.fr</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
