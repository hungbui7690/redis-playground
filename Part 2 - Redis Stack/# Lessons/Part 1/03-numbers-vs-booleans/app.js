/*
  Numbers & Booleans

    JSON.GET products:2 $.price
    -> 19.99
    JSON.GET products:2 $.onSale
    -> true


    JSON.NUMINCRBY products:2 $.count 10
    JSON.NUMMULTBY products:2 $.count 10


    JSON.TYPE products:2 $.price
    -> number
    JSON.TYPE products:2 $.onSale
    -> boolean
    JSON.TYPE products:2 $.options.colors
    -> array


    JSON.STRLEN products:2 $.title
    -> 12

    












*/
