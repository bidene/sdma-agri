export default function VehiculesUtilitairesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Véhicules utilitaires</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez notre gamme de véhicules utilitaires pour vos activités professionnelles et artisanales.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚐</span>
            <h3 className="text-xl font-semibold">Fourgons utilitaires</h3>
          </div>
          <p className="text-muted-foreground">Fourgons spacieux pour le transport de marchandises et d'équipements.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚙</span>
            <h3 className="text-xl font-semibold">Pick-ups</h3>
          </div>
          <p className="text-muted-foreground">Véhicules polyvalents pour les travaux agricoles et chantiers.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🔧</span>
            <h3 className="text-xl font-semibold">Véhicules de service</h3>
          </div>
          <p className="text-muted-foreground">Solutions adaptées pour les interventions techniques et maintenance.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚗</span>
            <h3 className="text-xl font-semibold">Camionnettes</h3>
          </div>
          <p className="text-muted-foreground">Véhicules compacts pour les livraisons urbaines et services.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🏠</span>
            <h3 className="text-xl font-semibold">Véhicules aménagés</h3>
          </div>
          <p className="text-muted-foreground">Solutions sur mesure pour vos besoins spécifiques (atelier, bureau...).</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">👥</span>
            <h3 className="text-xl font-semibold">Minibus</h3>
          </div>
          <p className="text-muted-foreground">Véhicules de transport pour le personnel et les équipes.</p>
        </div>
      </div>
    </div>
  )
}
