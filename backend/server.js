const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 ; 

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; 

mongoose.connect(uri , { useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection ; 
connection.once('open', () => {
    console.log("Conection a MongoDb est etablie");
})

const offresRouter = require('./routes/offres');
const favorisRouter = require('./routes/favoris');
app.use('/offres' , offresRouter);
app.use('/favoris' , favorisRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

