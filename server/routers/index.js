module.exports = function(app) {

  var router = app.loopback.Router();
  router.get('/', function(req, res, next) {
    res.render('index', {user: null});
  });

  return router
};