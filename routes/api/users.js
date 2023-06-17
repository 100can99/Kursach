var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let users = await req.db.any(`
        SELECT
            users.id AS id,
            users.login AS login,
            users.imya AS imya,
            roli.nazvanie AS roli_nazvanie
        FROM
            users
        INNER JOIN roli ON roli.id = users.id_role
    `)
    console.log(users)
    res.json({users: users })

});

module.exports = router;