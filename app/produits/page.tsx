import { Suspense } from "react"
import Loading from "./loading"
import ProductsClient from "./products-client"

export const metadata = {
  title: "Produits - SDMA TRUCKS | Tracteurs et Matériel Agricole",
  description: "Découvrez notre gamme complète de tracteurs et matériel agricole. Neufs et occasions disponibles dans notre agence du Morbihan.",
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsClient />
    </Suspense>
  )
}
