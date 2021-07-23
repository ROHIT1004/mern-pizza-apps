const { mongoose } = require("mongoose");

var mogoURL = 'mongodb://localhost/useras';

mongoose.connect(mogoURL, {useUnifiedTopology: true, useNewUrlParser:true});

var db= mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo db Connection SCUCCESSfull');
})

db.on('error', () =>{
    console.log('Mongo db Connection Failed');
})

module.exports = mongoose