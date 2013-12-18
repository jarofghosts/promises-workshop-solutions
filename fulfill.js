var defer = require('q').defer()

setup().then(function(result) {
  console.log(result)
})

function setup() {
  setTimeout(function () {
    defer.resolve('RESOLVED!')
  }, 300)

  return defer.promise
}
