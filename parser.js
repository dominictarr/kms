var u = require('ubelt')
  , render = require('render')

module.exports = function (string) {

  var lines = string.split('\n')
  var curIndent = 0
  var curItem = {value: '', children: [], indent: -1}
  var stack = [curItem]

  function parseLine (line) {
    var m = /^(\s*)(\*\s?)?((?:\w|\s)+)/.exec(line)
    return {
      indent: m[1] ? Math.round(m[1].length / 2) : 0
    , type:   (m[2] || '').trim()
    , value:  m[3]
    , children: []
    }
  }

  function addChild (c) {
   var l =  u.last(stack)
    if(!l.children)
      l.children = [c]
    else 
      l.children.push(c)
  }

  while(lines.length) {
    var l = parseLine(lines.shift())
    
    while(l.indent <= u.last(stack).indent)
      stack.pop()

    addChild(l)
    stack.push(l)  
  }
  render.log.cf(stack[0])
  return stack[0].children
}
