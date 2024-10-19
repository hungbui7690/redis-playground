/*
  Intro
  - in-memory data store
  - key-value structures
  - caching layer
  - store in ram (very fast)


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  API -> Redis -> Database
  - Database: safe
  - Redis: fast -> if it breaks -> go to Database

  API -> Redis Database
  - redis can become database since is has:
    # data persistance
    # json support
    # search
    # redis om -> object mapping 
    # redis cloud 
    => sometimes refer these above as Redis Stack
  - redis without these extra modules -> Redis Core


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  String
  - name -> 'mario'
  - age -> '30'

  Set
  - names -> { 'mario', 'luigi', 'peach' }

  Hash
  - user -> { name: 'mario', age: '30' }

  List
  - names -> [ 'mario', 'luigi', 'peach' ]

  Sorted Sets
  - names -> {
      'mario': 100,
      'luigi': 200,
      'peach': 300
  }

\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Keys
  - names
  - names:1
  - names:2


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Setup 
  - Cloud: https://cloud.redis.io/  
    # create account
    # create subscription
    # create database -> redis stack -> activate db 
    # connect -> redis insights -> download 
      -> this is the Redis UI Client 

  - Redis Insights
    # Browser -> click on the refresh (or the search icon) to refresh
    # Workbench -> use query here




*/
