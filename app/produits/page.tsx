import { Suspense } from "react"
import Loading from "./loading"
import ProductsClient from "./products-client"

export const metadata = {
  title: "Produits - SDMA Agri | Tracteurs VALTRA et Matériel Agricole",
  description: "Découvrez notre gamme complète de tracteurs VALTRA et matériel agricole. Neufs et occasions disponibles dans nos agences du Finistère et Morbihan.",
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsClient />
    </Suspense>
  )
}
