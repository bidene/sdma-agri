export default function MaterielsAgricolesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Matériels agricoles</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Découvrez notre gamme complète de matériels agricoles pour optimiser votre exploitation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🚜</span>
            <h3 className="text-xl font-semibold">Tracteurs agricoles</h3>
          </div>
          <p className="text-muted-foreground">Tracteurs puissants et fiables pour tous vos travaux agricoles.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🌾</span>
            <h3 className="text-xl font-semibold">Moissonneuses-batteuses</h3>
          </div>
          <p className="text-muted-foreground">Matériels de récolte performants pour vos cultures.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🔧</span>
            <h3 className="text-xl font-semibold">Matériels de travail du sol</h3>
          </div>
          <p className="text-muted-foreground">Charrues, herses et cultivateurs pour préparer vos terres.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🌱</span>
            <h3 className="text-xl font-semibold">Matériels de semis</h3>
          </div>
          <p className="text-muted-foreground">Semoirs précis pour optimiser vos plantations.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">✂️</span>
            <h3 className="text-xl font-semibold">Matériels de récolte</h3>
          </div>
          <p className="text-muted-foreground">Presse, ramasseuses et autres équipements de récolte.</p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="text-4xl mr-3">🏠</span>
            <h3 className="text-xl font-semibold">Matériels d'élevage</h3>
          </div>
          <p className="text-muted-foreground">Équipements spécialisés pour les exploitations d'élevage.</p>
        </div>
      </div>
    </div>
  )
}
