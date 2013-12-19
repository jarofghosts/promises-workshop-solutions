var qhttp = require('q-io/http')

qhttp.read('http://localhost:1337')
  .then(function(val) {
    console.log(JSON.parse(val))
  })
  .then(null, console.log)
  .done()
