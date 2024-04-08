const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const db=require('./config/db');
const port= process.env.PORT ||5000;
// const session=require("express-session");
// const passport=require("passport");
// const OAuth2Strategy=require("passport-google-oauth2").Strategy;
// const User=require("../server/models/userModel");


// const clientid="1075006356295-ql5pn37raqoqdvevf52p227peq20rddp.apps.googleusercontent.com"
// const clientsecret="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"


const usersRoute=require('./routes/usersRoute');
const productsRoute=require('./routes/productsRoute');
const bidsRoute=require('./routes/bidsRoute');
const notificationsRoute=require('./routes/notificationsRoute');

app.use('/api/users',usersRoute);
app.use('/api/products',productsRoute);
app.use('/api/bids',bidsRoute);
app.use('/api/notifications',notificationsRoute);



//setup session
// app.use(session({
//     secret:"1134465hguhji",
//     resave:false,
//     saveUninitialized:true
// }))

// //setup passport
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//     new OAuth2Strategy({
//        clientID:clientid,
//        clientSecret:clientsecret,
//         callbackURL:"/auth/google/callback",
//         scope:["profile","email"]
//     },
//     async(accessToken,refreshToken,profile,done)=>{
//         console.log("profile",profile)
//         try {
//             let user=await User.findOne({googleId:profile.id});
//             if(!user){
//                 user=new User({
//                     googleId:profile.id,
//                     name:profile.name,
//                     email:profile.emails[0].value,
//                     profilePicture:profile.photos[0].value
//                 });
//                 await user.save();
//             }

//             return done(null,user)
            
//         } catch (error) {
//             return done(error,null)
//         }
//     })
// )
// passport.serializeUser((user,done)=>{
//     done(null,user);
// })
// passport.deserializeUser((user,done)=>{
//     done(null,user);
// });

// //initial google ouath login
// app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

// app.get("/auth/google/callback",passport.authenticate("google",{
//     successRedirect:"http://localhost:5000/home",
//     failureRedirect:"http://localhost:5000/login"
// }))

    //deployement config
    const path=require("path");
    __dirname=path.resolve();
    
    if(process.env.NODE_ENV ==="production"){
        app.use(express.static(peth.join(__dirname,"/client/build")));
        app.get("*",(req,res)=>{
            res.sendFile(path.join(__dirname,"client","build","index.html"));
        });
    }
    app.listen(port,()=>{
        console.log(`Node/Express server running on port ${port}`);
})

