var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('eda/list', { title: 'Каталог' })

});

module.exports = router;
