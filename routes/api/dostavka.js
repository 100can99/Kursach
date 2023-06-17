var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let dostavka = await req.db.any(`
        SELECT
            dostavka.id AS id,
            dostavka.kolicestvo AS kolicestvo,
            eda.cena*dostavka.kolicestvo AS cena,
            dostavka.data AS data,
            postavshiki.nazvanie AS post_name,
            users.imya AS user_imya,
            eda.nazvanie AS eda_nazvanie
        FROM
            dostavka
        INNER JOIN
            users ON users.id = dostavka.id_user
        INNER JOIN
            eda ON eda.id = dostavka.id_edi 
        INNER JOIN
            postavshiki ON postavshiki.id = dostavka.id_postavshika
    `)
    console.log(dostavka)

    let eda = await req.db.any(`
        SELECT
            eda.id AS id,
            eda.nazvanie AS name,
            eda.tip AS tip,
            eda.cena AS cena,
            eda.kolicestvo AS kolicestvo
        FROM
            eda 
    `)
    console.log(eda)
    res.json({dostavka: dostavka, eda: eda })

});

module.exports = router;