import { client } from '../_lib/redis'
import { Schema, Repository } from 'redis-om'

const productSchema = new Schema('product', {
  title: { type: 'text' },
  price: { type: 'number' },
  count: { type: 'number' },
  colors: { type: 'string[]' },
  size: { type: 'string' },
  img: { type: 'string' },
})

const productRepository = new Repository(productSchema, client)

productRepository.createIndex()

export { productRepository }
