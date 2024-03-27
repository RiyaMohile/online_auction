const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://riyamohile812:3h1nUEchp4QPDA4g@cluster2.x8vqjgc.mongodb.net/sheymp?retryWrites=true&w=majority");

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('mongo DB connection successful')
})

connection.on('error',(err)=>{
    console.log('mongo DB connection failed')
})
module.exports = connection;

