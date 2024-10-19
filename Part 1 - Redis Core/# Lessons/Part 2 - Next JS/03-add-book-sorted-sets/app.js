/*
  Using Redis in NextJS
  1. app/create/action/create.js
  2. Insights -> test


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Sorted Sets
  # ZADD books 7 "Harry Potter" 2 "Lord of the Rings" 9 "J.R.R. Tolkien"

  - when we create a new book -> add its title to the sorted set
  - then check if that title is already in the set -> if it is, return error
  - else, add the book to the set 
  - then add the book to the hash with its details



*/
