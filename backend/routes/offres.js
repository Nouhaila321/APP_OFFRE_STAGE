const router = require('express').Router();
const Offre = require('../models/offre.model');

router.route('/').get((req, res) => {
    Offre.find()
    .then( offres => res.json(offres))
    .catch(err => res.status(400).json('Error' + err));
});


module.exports = router; 