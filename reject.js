var defer = require('q').defer()

setup().then(function(result) {
  console.log(result)
}, function(err) {
  console.log(err.message)
})

function setup() {
  setTimeout(function () {
    defer.reject(new Error('REJECTED!'))
  }, 300)

  return defer.promise
}
