var defer = require('q').defer,
    p1 = defer(),
    p2 = defer()

function all(promise1, promise2) {
  var counter = 0,
      results = [],
      all_promise = defer()

  promise1.then(add_result, err)
  promise2.then(add_result, err)

  return all_promise.promise

  function add_result(val) {
    counter++
    results.push(val)
    if (counter === 2) all_promise.resolve(results)
  }

  function err(val) {
    all_promise.reject(val)
  }
}

all(p1.promise, p2.promise)
  .then(console.log)

setTimeout(function() {
  p1.resolve('PROMISES')
  p2.resolve('FTW')
}, 200)
