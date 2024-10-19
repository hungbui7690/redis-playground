import { productRepository } from '../_schemas/products'
import { EntityId } from 'redis-om'
import ProductList from '../_components/productList'

// #
const getProducts = async () => {
  let products = await productRepository.search().return.all()
  // console.log(products)
  // console.log(products[0][EntityId])

  products = products.map((p) => {
    const { title, count, price, img, colors, size } = p
    return { title, count, price, img, colors, size, id: p[EntityId] }
  })

  return products
}

export default async function Products() {
  const products = await getProducts() // #

  return (
    <main>
      <header>
        <h2>All Products</h2>
      </header>

      <ProductList products={products} />
    </main>
  )
}
