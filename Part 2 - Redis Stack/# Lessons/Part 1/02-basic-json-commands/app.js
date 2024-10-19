/*
  Basic JSON Commands

    JSON.SET key path value
    JSON.SET products:1 $ 
      '{
          "title": "Net Ninja Hoodie",
          "price": 19.99,
          "options": {
            "color": ["black", "white"],
            "size" : "lg"
          },
          "count": 50,
          "onSale": true 
      }' 
      => $ : root path


    JSON.SET products:1 $.options.size
      'xs'
      => $.options.size -> add to options.size
      => now options.size = 'xs' -> not 'lg' anymore


    JSON.GET products:1


    JSON.DEL products:1 $.price
    -> delete price property


    DEL products:1



*/
