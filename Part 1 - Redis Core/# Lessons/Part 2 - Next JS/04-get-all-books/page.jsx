import { client } from '@/lib/db'
import Link from 'next/link'

const getBooks = async () => {
  // 1.
  const result = await client.zRangeWithScores('books', 0, -1)

  // score is the id of the book
  // [{value: 'abc', score: '2397'}, {value: 'def', score: '4233'}]

  // 2. since we want to run multiple async function -> we need to use promise.all
  // client.hGetAll('books:2397')
  // client.hGetAll('books:4233')
  const books = await Promise.all(
    result.map((b) => {
      return client.hGetAll(`books:${b.score}`)
    })
  )

  return books
}

export default async function Home() {
  const books = await getBooks()
  console.log(books)

  return (
    <main>
      <nav className='flex justify-between'>
        <h1 className='font-bold'>Books on Redis!</h1>
        <Link href='/create' className='btn'>
          Add a new book
        </Link>
      </nav>

      {books.map((book) => (
        <div key={book.title} className='card'>
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <p>{book.blurb}</p>
          <p>Rating: {book.rating}</p>
        </div>
      ))}
    </main>
  )
}
