const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offreSchema = new Schema ({
    societe: {type: String, required:true},
    description: {type: String, required:true},
    URL_stage: {type: String, required:true}
},{
    collection : 'offre_stage'
});

const Offre = mongoose.model('offre_stage', offreSchema);

module.exports = Offre; 