var qhttp = require('q-io/http')

qhttp.read('http://localhost:7000')
  .then(get_user)
  .then(to_string)
  .then(JSON.parse)
  .then(console.log)
  .then(null, console.log)
  .done()

function get_user(id) {
  return qhttp.read('http://localhost:7001/' + id.toString())
}

function to_string(buf) {
  return buf.toString()
}
