var defer = require('q').defer()

setup().then(function(result) {
  console.log(result)
}, function(err) {
  console.log(err)
})

function setup() {
  defer.resolve('I FIRED')
  defer.reject('I DID NOT FIRE')

  return defer.promise
}
