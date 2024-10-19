/*
  String
  - https://redis.io/docs/latest/commands/
  - Insights -> Workbench


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  SET name hunter  
  SET age 30
  GET age
  DEL age

  MSET name2 yoshi color green rating 10 -> set multiple keys at once
  MGET name rating 

  GETRANGE name 0 3 -> mari -> first character is 0
  -> key starts from 0 to 3 characters

  GETRANGE name 2 -1 -> from 2 to last character
  GETRANGE name -3 -1

  SETRANGE name 2 abc
  GET name -> hu"abc"r

  INCR rating
  DECR rating

  INCRBY rating 5


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Command Options
  - https://redis.io/docs/latest/commands/set/
  - Example: SET command: 

      # SET key value [NX | XX] [GET] [EX seconds | PX milliseconds |EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]
        
        SET name yoshi EX 7
        -> EX seconds -- Set the specified expire time, in seconds (a positive integer).
        SET name yoshi NX
        -> NX -- Only set the key if it does not already exist.
        SET name yoshi XX
        -> XX -- Only set the key if it already exists.
        SET name yoshi GET
        -> GET -- Return the old string stored at key, or nil if key did not exist. An error is returned and SET aborted if the value stored at key is not a string.


*/
