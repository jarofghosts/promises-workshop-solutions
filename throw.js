var defer = require('q').defer()

function parsePromised() {

  try {
    defer.resolve(JSON.parse(process.argv[2]))
  } catch(err) {
    defer.reject(err)
  }

  return defer.promise

}

parsePromised()
  .then(console.log, console.log)
