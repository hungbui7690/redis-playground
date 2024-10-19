/*
  Array Commands

    JSON.ARRAPPEND key path value
    JSON.ARRAPPEND products:2 $.options.colors 'red'


    JSON.GET products:2 $.options.colors
    -> ["black", "white", "red"]


    JSON.ARRPOP products:2 $.options.colors
    -> 'red'


    JSON.ARRINDEX products:2 $.options.colors '"black"'
    -> 0


    JSON.ARRLEN products:2 $.options.colors
    -> 3


    JSON.ARRINSERT products:2 $.options.colors 0 'blue'





*/
