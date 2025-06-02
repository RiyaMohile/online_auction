const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

// mongoose.connect("mongodb://localhost:27017/Market");

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('mongo DB connection successful')
})

connection.on('error',(err)=>{
    console.log('mongo DB connection failed')
})
module.exports = connection;

