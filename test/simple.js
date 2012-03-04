var test = require('tap').test
  , fs = require('fs')
  , parse = require('../parser')
  , join = require('path').join
  , a = require('assertions')

test('simple', function(t) {

  var output = 
  parse(
    [ 'PROJECT:'
    , '  * item1'
    , '  * item2 has spaces'
    , '  * item3' ].join('\n'))

  t.end()
  return

  a.has([{
    value: 'PROJECT' ,
    children: [
      { value: 'item1'}, 
      { value: 'item2 has spaces'}, 
      { value: 'item3'}
    ]
  }])

  t.end()
})

test('nested', function (t) {
  
  var output = 
  parse(
    [ 'PROJECT:'
    , '  * item1'
    , '  * item2 has spaces'
    , '    * sub item' 
    , '  * item3' ].join('\n'))

  //return

  a.has([{
    value: 'PROJECT',
    children: [
      { value: 'item1'}, 
      { value: 'item2 has spaces',
        children: [{value: 'sub item'}]
      }, 
      { value: 'item3'}
    ]
  }])
  
  t.end()
})
