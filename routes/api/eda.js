var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let eda = await req.db.any(`
        SELECT
            eda.id AS id,
            eda.nazvanie AS nazvanie,
            eda.tip AS tip,
            eda.cena AS cena_label,
            eda.kolicestvo AS kolicestvo_label
        FROM
            eda
    `)
    console.log(eda)
    res.json({eda: eda })

});

module.exports = router;