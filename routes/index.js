var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', (req, res) => {
  console.log('Hi, this is the TEST_API index post. Here is your req body', req.body);
  res.json(req.body);
});
module.exports = router;
