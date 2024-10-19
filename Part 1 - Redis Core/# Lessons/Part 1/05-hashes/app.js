/*
  Hashes

\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  HSET books:1 title "Harry Potter"
  HSET books:1 author "J.K. Rowling"
  HSET books:1 year 1997
  HSET books:1 rating 9
  HSET books:1 rating 10 -> overwrite
  HSET books:2 title "Lord of the Rings" author "J.R.R. Tolkien" year 1954 rating 8


  HGET books:1 title -> "Harry Potter"
  HGETALL books:1 -> return all fields


  HEXISTS books:1 title -> 1
  HEXISTS books:2 abc -> 0


  HKEYS books:2 -> ["title", "author", "year", "rating"]


  HDEL books:1 author -> delete field
  DEL books:1 -> delete the entire hash


  HVALS books:2 -> ["Lord of the Rings", "J.R.R. Tolkien", 1954, 8]



*/
