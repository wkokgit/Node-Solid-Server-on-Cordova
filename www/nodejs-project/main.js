const cordova = require('cordova-bridge');

cordova.channel.on('message', function (msg) {
  console.log('[node] received:', msg);
  cordova.channel.send('Replying to this message: ' + msg);

  console.log("REQUIRE SOLID SERVER")
  var solid = require('solid-server')

  console.log("CREATE SOLID SERVER")
  console.log(cordova.app.datadir())
  var ldp = solid.createServer({
      key: '/../../../../privkey.pem',
      cert: '/../../../../fullchain.pem',
      webid: true,
      configPath: msg.slice(5)
      // configPath: cordova.app.datadir()
      //root: cordova.app.datadir()
  })

  console.log("RUN SOLID SERVER")
  ldp.listen(3456, function() {
      console.log("running solid server!!")
    // Started Linked Data Platform
  })
  // const express = require('express')
  // const solid = require('solid') // or require('solid')

  // // Starting our express app
  // const app = express()

  // // My routes
  // app.get('/', function (req, res) {
  //   console.log(req)
  //   res.send('Welcome to my server!')
  // })

  // // Mounting solid on /ldp
  // const ldp = solid()
  // app.use('/ldp', ldp)

  // // Starting server
  // app.listen(3000, function () {
  //   console.log('Server started on port 3000!')
  // })
});

