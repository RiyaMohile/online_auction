const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const db=require('./config/db');
const port= process.env.PORT ||5000;

const usersRoute=require('./routes/usersRoute');
const productsRoute=require('./routes/productsRoute');
const bidsRoute=require('./routes/bidsRoute');
const notificationsRoute=require('./routes/notificationsRoute');

app.use('/api/users',usersRoute);
app.use('/api/products',productsRoute);
app.use('/api/bids',bidsRoute);
app.use('/api/notifications',notificationsRoute);


    //deployement config
    const path = require("path");
    __dirname = path.resolve();
    
    if(true || process.env.NODE_ENV === "production"){
        app.use(express.static(path.join(__dirname,"/client/build")));
        app.get("*",(_,res)=>{
            res.sendFile(path.join(__dirname,"client","build","index.html"));
        });
    }
    app.listen(port,()=>
        console.log(`Node/Express server running on port ${port}`)
);

