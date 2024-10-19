'use server'

import { client } from '@/lib/db' // 1.
import { redirect } from 'next/navigation'

export async function createBook(formData) {
  const { title, rating, author, blurb } = Object.fromEntries(formData)

  // 2. create a book id
  const id = Math.floor(Math.random() * 100000)

  // 3. add the book to the sorted set
  const unique = await client.zAdd(
    'books',
    {
      value: title, // just add the book title as value
      score: id, // use book id as score
    },
    { NX: true }
  )

  // 4. 0 -> not-add / 1 -> add
  if (!unique) return { error: 'That book has already been added.' }

  // 5. save new hash for the book
  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb,
  })

  redirect('/')
}
