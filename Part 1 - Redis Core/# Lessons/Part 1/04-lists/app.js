/*
  Lists
  - ex: names -> [<mario>, <mario>, 'yoshi', 'luigi']
    -> linked list -> <mario> -> <mario> -> yoshi -> luigi
    -> each item knows its next item
    -> 1st and last item are the fastest one to get
    
    
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  LPUSH orders ryu -> index = 0
  LPUSH orders kuma -> index = 1
  RPUSH orders blanka ken
  # ryu -> kuma -> blanka -> ken
  LPUSH orders sagat balgot
  # balgot -> sagat -> ryu -> kuma -> blanka -> ken


  LPOP orders 1 -> balgot -> 1 element from the left side 
  RPOP orders 2 -> blanka kent 
  # sagat -> ryu -> kuma


  LLEN orders -> 3 -> length of the list
  LRANGE orders 0 2 -> sagat ryu kuma
  LRANGE orders -2 -1 -> ryu kuma


  LINDEX orders 1 -> ryu  
  LPOS orders ryu -> 1








*/
