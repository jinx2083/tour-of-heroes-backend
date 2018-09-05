
const router = require('express').Router();
const service = require('../services/heroes');

router.get('/', (req, res) => {
    var heroes = service.getAll(req, res);

    res.status(200).send(heroes);
});

router.get('/:id', (req, res) => {

    var hero = service.getHeroById(req.params.id);

    res.status(200).send(hero);
});


router.get('/:name/name', (req, res) => {

    var heroes = service.getHeroesByName(req.params.name);

    res.status(200).send(heroes);

});


router.post('/', (req, res) => {

    const body = req.body;

    if(!body) {
        res.status(400).send("The request body is empty");
    }

    var hero = service.create(body.name);

    res.status(201).send(hero);
});

router.put('/:id', (req, res) => {

    const body = req.body;

    if(!body) {
        res.status(400).send("The request body is empty");
    }

    var hero = service.update(req.params.id, body.name);

    res.status(200).send(hero);

});

router.delete('/', (req, res) => {

    service.deleteAll();

    res.status(204);

});

router.delete('/:id', (req, res) => {

    service.delete(req.params.id);

    res.status(204);
});

module.exports = router;