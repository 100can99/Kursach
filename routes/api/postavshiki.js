var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let postavshiki = await req.db.any(`
        SELECT
            postavshiki.id AS id,
            postavshiki.nazvanie AS nazvanie,
            postavshiki.telephone AS telephone_label,
            postavshiki.address AS address
        FROM
            postavshiki
    `)
    console.log(postavshiki)
    res.json({postavshiki: postavshiki })

});

module.exports = router;