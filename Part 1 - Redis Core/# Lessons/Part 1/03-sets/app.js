/*
  Sets
  - https://redis.io/docs/latest/commands/sadd/
  - ex: 
    # names -> {'mario', 'yoshi', 'luigi'}
    # colors -> {'green', 'blue', <red>, <red>}
  - useful to store something like status of a user
  - tracking block ip addresses
  - article titles
  - tags


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  SADD names mario
  SADD names yoshi luigi
  SADD moreNames stone zelda alex

  SREM names yoshi
  -> remove yoshi from names

  SUNION names moreNames
  -> return the union of names and moreNames -> not create new set

  SISMEMBER names patrick -> 0 since "patrick" is not in "names"
  SISMEMBER names peach -> 1


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Sorted Sets
  - similar to sets -> but ordered by score 

    # ZADD books 7 "Harry Potter" 2 "Lord of the Rings" 9 "J.R.R. Tolkien"
      -> books = name of the set
      ZADD books 3 NX "Finding Nemo"
      -> update "Finding Nemo" with a score of 3 if it doesn't exist
      ZADD books 4 "Cinderella" 


    # ZRANGE books 0 -1

    # DEL books

  🌲 Practical Example: 
  - for example, we have a list of books 
  - to prevent adding duplicates -> use sorted sets



*/
