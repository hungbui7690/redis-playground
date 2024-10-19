/*
  RediSearch - Full Text Search

    FT.SEARCH index: products '@title:(tee)'
    -> contains 'tee' in title
    FT.SEARCH index: products '@title:(code tee)'
    -> both 'code' and 'tee' in title
    FT.SEARCH index: products '@title:(code|tee)'
    -> 'code' or 'tee'
    FT.SEARCH index: products '@title:("code tee")'
    -> match exact "code tee"



*/
