export default function TransportsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Transports</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez notre gamme de solutions de transport pour vos besoins logistiques et de déplacement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚚</span>
            <h3 className="text-xl font-semibold">Camions bennes</h3>
          </div>
          <p className="text-muted-foreground">Camions robustes pour le transport de matériaux et de marchandises.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">📦</span>
            <h3 className="text-xl font-semibold">Camions plateaux</h3>
          </div>
          <p className="text-muted-foreground">Solutions polyvalentes pour le transport de charges lourdes et volumineuses.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚛</span>
            <h3 className="text-xl font-semibold">Remorques agricoles</h3>
          </div>
          <p className="text-muted-foreground">Remorques adaptées pour les transports agricoles et récoltes.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">💧</span>
            <h3 className="text-xl font-semibold">Camions citernes</h3>
          </div>
          <p className="text-muted-foreground">Solutions de transport pour liquides et produits en vrac.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🧭</span>
            <h3 className="text-xl font-semibold">Porteurs et tracteurs</h3>
          </div>
          <p className="text-muted-foreground">Véhicules puissants pour les longs trajets et charges lourdes.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">⬆️</span>
            <h3 className="text-xl font-semibold">Équipements de manutention</h3>
          </div>
          <p className="text-muted-foreground">Grues et hayons élévateurs pour faciliter le chargement.</p>
        </div>
      </div>
    </div>
  )
}
