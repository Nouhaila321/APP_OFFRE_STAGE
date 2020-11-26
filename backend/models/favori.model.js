const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriSchema = new Schema ({
    societe: {type: String, required:true},
    description: {type: String, required:true},
    URL_stage: {type: String, required:true}, 
    postule: {type: Boolean}
},{
    collection : 'favorites'
});

const Favori = mongoose.model('favorites', favoriSchema);

module.exports = Favori; 