var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let prodazhi = await req.db.any(`
        SELECT
            prodazhi.id AS id,
            users.imya AS user_label,
            eda.nazvanie AS edi_label,
            prodazhi.kolicestvo AS kolicestvo,
            prodazhi.data AS data
        FROM
            prodazhi
        INNER JOIN users ON users.id = prodazhi.id_user 
        INNER JOIN eda ON eda.id = prodazhi.id_edi
    `)
    console.log(prodazhi)
    res.json({prodazhi: prodazhi })

});

module.exports = router;