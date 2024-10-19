/*
  RediSearch - Query JSON Fields
  - https://redis.io/docs/latest/commands/ft.search/


    FT.SEARCH index:products '@count:[0 100]'
    -> return all products with count between 0 and 100
    FT.SEARCH index:products '@count:[0 inf]'
    FT.SEARCH index:products '@count:[-inf 100]'

    
    FT.SEARCH index:products '@size:{md}'
    -> size = 'md' -> exact match
    FT.SEARCH index:products '@size:{md|lg}'
    FT.SEARCH index:products '-@size:{md|lg}'
    -> size !== 'md' or 'lg'






*/
