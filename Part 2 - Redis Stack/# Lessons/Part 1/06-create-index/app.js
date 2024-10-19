/*
  RediSearch - Making an Index
  - https://redis.io/docs/latest/commands/ft.create/
  - TAG: exact match
  - ON HASH | ON JSON

    FT.CREATE index:products ON JSON prefix 1 products: SCHEMA
      $.title AS title TEXT
      $.options.size AS size TAG 
      $.count AS count NUMERIC



*/
