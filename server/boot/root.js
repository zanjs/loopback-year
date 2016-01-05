module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  
  var index = require('../routers/index')(server);

  server.use('/', index);
  
  router.get('/', server.loopback.status());
  server.use(router);
};
