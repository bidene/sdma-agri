export default function TravauxPublicsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Travaux publics - Matériels TP</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez notre gamme de matériels de travaux publics pour vos chantiers et infrastructures.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🏗️</span>
            <h3 className="text-xl font-semibold">Bulldozers</h3>
          </div>
          <p className="text-muted-foreground">Pousseurs puissants pour les travaux de terrassement et de nivellement.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚚</span>
            <h3 className="text-xl font-semibold">Chargeuses sur pneus</h3>
          </div>
          <p className="text-muted-foreground">Chargeuses polyvalentes pour les chantiers de construction.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🔧</span>
            <h3 className="text-xl font-semibold">Pelles hydrauliques</h3>
          </div>
          <p className="text-muted-foreground">Pelles performantes pour les travaux d'excavation et de démolition.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">⚙️</span>
            <h3 className="text-xl font-semibold">Niveleuses</h3>
          </div>
          <p className="text-muted-foreground">Matériels de précis pour la préparation des surfaces et chaussées.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">📦</span>
            <h3 className="text-xl font-semibold">Compacteurs</h3>
          </div>
          <p className="text-muted-foreground">Matériels de compactage pour les sols et les enrobés.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚛</span>
            <h3 className="text-xl font-semibold">Dumpers</h3>
          </div>
          <p className="text-muted-foreground">Bennes robustes pour le transport de matériaux sur chantier.</p>
        </div>
      </div>
    </div>
  )
}
