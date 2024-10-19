import { client } from '../_lib/redis'
import { Schema, Repository } from 'redis-om'

// # follow the docs: https://github.com/redis/redis-om-node
const productSchema = new Schema('product', {
  title: { type: 'text' },
  price: { type: 'number' },
  count: { type: 'number' },
  colors: { type: 'string[]' },
  size: { type: 'string' },
  img: { type: 'string' },
})

const productRepository = new Repository(productSchema, client)

// create a product index
productRepository.createIndex()

export { productRepository }
