const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
var port = process.env.port || 80;
const Cevap = require("./model/cevap");
var crypto = require('crypto');
let murmurhash = require('murmurhash');
const { METHODS } = require('http');


mongoose.connect("mongodb://localhost/anket", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("veritabanı bağlandı");// we're connected!
});

app.use(morgan('dev'));
let deneme;
app.get('/anket/:anketid',function(req,res){
    deneme=req.params.anketid;
    res.send('id:'+deneme);
 
});

app.listen(port, function(){
    console.log("çalışan port:"+port);
});

app.use(express.json());

app.post("/cevap", function(req,res){
    
    var cevap = new Cevap({
        Uyekod: deneme
    });
    
    cevap.save();
    //cevap.collection.insert(req.body);
    //res.send(req.body);
    //cevap.Cevaplar.cevap= req.body.cevap;
    
    res.send("cevap yollandı");
});
app.get("/", function(req,res){
    
    res.send('Hello World!');
});
app.get("/cevap", function(req,res){

    var cevap = new Cevap({
        Uyekod: deneme,
        Cevaplar:

        ]
    });
    
    cevap.save();
    //cevap.collection.insert(req.body);
    //res.send(req.body);
    //cevap.Cevaplar.cevap= req.body.cevap;
    
    res.send(cevap.params);
});

app.get("/sifre", function(req,res){
    
    let sifre =crypto.createHash('sha256').update('609363100a012402d01aed5d').digest('hex');


});