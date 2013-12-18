var fcall = require('q').fcall

fcall(JSON.parse, process.argv[2])
  .then(console.log, console.log)
