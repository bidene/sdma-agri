export default function ManutentionPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Manutention de matériaux</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez notre gamme de matériel de manutention pour vos besoins agricoles et industriels.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">📦</span>
            <h3 className="text-xl font-semibold">Chargeurs frontaux</h3>
          </div>
          <p className="text-muted-foreground">Chargeurs performants pour toutes vos applications de manutention.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🏗️</span>
            <h3 className="text-xl font-semibold">Pelles mécaniques</h3>
          </div>
          <p className="text-muted-foreground">Pelles robustes pour les travaux de terrassement et de manutention.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚜</span>
            <h3 className="text-xl font-semibold">Chariots élévateurs</h3>
          </div>
          <p className="text-muted-foreground">Solutions de levage et transport pour vos charges lourdes.</p>
        </div>
      </div>
    </div>
  )
}
