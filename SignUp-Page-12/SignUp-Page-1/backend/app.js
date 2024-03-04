require("dotenv").config();
const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
// const passport = require ('passport');
// const session = require ('express-session');
// require("./googleAuth");

const user = require("./routes/userRoute");
// const cookieSession = require("cookie-session");
// const cors = require("cors");
// const OAuth2Strategy = require('passport-google-oauth2').Strategy;
// const userSchema = require("./models/userModel");

const app = express();


app.use(express.json());
app.use(cookieParser());



// app.use("/", user);
app.use("/api/v1", user);


// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// }));
// app.use(express.json());

// // setup session
// app.use(session({
//     secret:"MYSECRET",
//     resave:false,
//     saveUninitialized:true
// }))

// // setuppassport
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//     new OAuth2Strategy({
//         clientID:clientid,
//         clientSecret:clientsecret,
//         callbackURL:"http://localhost:8080/auth/google/callback",
//         scope:["profile","email"],
// 		passReqToCallback: true,
//     },
//     async(request,accessToken,refreshToken,profile,done)=>{
//         try {
//             let user = await userSchema.findOne({googleId:profile.id});

//             if(!user){
//                 user = new userSchema({
//                     googleId:profile.id,
//                     name:profile.displayName,
//                     email:profile.emails[0].value,
//                 });

//                 await user.save();
//             }
// 			console.log(user);
//             return done(null,user)
//         } catch (error) {
//             return done(error,null)
//         }
//     }
//     )
// )

// passport.serializeUser((user,done)=>{ 
//     done(null,user); 
// })

// passport.deserializeUser((user,done)=>{
//     done(null,user);
// });

// // initial google ouath login
// app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

// app.get("/auth/google/callback",passport.authenticate("google",{
//     successRedirect:"http://localhost:3000/",
//     failureRedirect:"http://localhost:3000/"
// }))

// app.get("/login/sucess",async(req,res)=>{

//     if(req.user){
//         res.status(200).json({message:"user Login",user:req.user})
//     }else{
//         res.status(400).json({message:"Not Authorized"})
//     }
// })

// app.get("/logout",(req,res,next)=>{
//     req.logout(function(err){
//         if(err){return next(err)}
//         res.redirect("http://localhost:3000");
//     })
// })


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;

