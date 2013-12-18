var defer = require('q').defer()

setup().then(console.log)

function setup() {
  defer.resolve('SECOND')
  console.log('FIRST')

  return defer.promise
}
