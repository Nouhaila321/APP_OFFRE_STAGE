const router = require('express').Router();
const Favori = require('../models/favori.model');

router.route('/').get((req, res) => {
    Favori.find()
    .then( favoris => res.json(favoris))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req,res) => {
    Favori.findById(req.params.id)
    .then( favoris => res.json(favoris))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/').post((req, res) => {
    const offre = req.body.offre;
    const newFav = new Favori (offre);
    newFav.save()
    .then(() => res.json('Offre ajoute aux favoris'))
    .catch(err => res.status(400).json('Error' + err));

});

router.route('/:id').delete((req,res) => {
    Favori.findByIdAndDelete(req.params.id)
    .then( () => res.json('Offre supprime du favoris'))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router; 
