var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('dostavka/list', { title: 'Платежи' })

});

router.post('/create', async function(req, res, next) {

    let dostav = req.body

    await req.db.none('INSERT INTO dostavka(kolicestvo, id_edi, id_postavshika, id_user) VALUES(${kolicestvo}, ${id_edi}, ${id_postavshika}, ${id_user})', dostav);

    res.send({msg: ''})

});


router.get('/:id', async function(req, res) {

    let id = req.params.id

    let dostav = await req.db.one(`
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
        WHERE
            dostavka.id = $/id/
    `, {id: id})

    res.render('dostavka/view', { title: 'Заказ' + dostav.label, dostav: dostav })

});

router.post('/edit', async function(req,res,next) {

    let dostav = req.body
    
    await req.db.none('UPDATE dostavka SET kolicestvo=${kolicestvo}, id_edi=${id_edi}, id_postavshika=${id_postavshika} WHERE id=${id}', dostav);

    res.send({msg: ''})

});

router.get('/:id', async function(req, res) {

    let id = req.params.id

    let dostav = await req.db.one(`
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
        WHERE
            dostavka.id = $/id/
    `, {id: id})

    res.render('dostavka/view', { title: 'Заказ' + dostav.label, dostav: dostav })

});

router.post('/delete', async function(req,res,next) {

    let dostav = req.body
    
    await req.db.none('DELETE FROM dostavka WHERE id=${id}', dostav);

    res.send({msg: ''})

});

router.get('/:id', async function(req, res) {

    let id = req.params.id

    let dostav = await req.db.one(`
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
        WHERE
            dostavka.id = $/id/
    `, {id: id})

    res.render('dostavka/view', { title: 'Заказ' + dostav.label, dostav: dostav })

});

module.exports = router;