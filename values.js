var defer = require('q').defer()

function start() {
  defer.resolve('MANHATTAN')
  return defer.promise
}

start().then(attachTitle).then(console.log)

function attachTitle(str) {
  return 'DR. ' + str
}
