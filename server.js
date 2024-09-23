const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person');
const bodyparserer = require('body-parser');
const menuitem = require('./models/menu');
const personRoute = require('./routes/personroutes');
const menuRoute = require('./routes/menuroute');
app.use(bodyparserer.json());
app.get( '/' , ( req , res) =>
{
    
    res.send(" hi , welcome to our hotel");
})
// bodyparserer hm json me data bhejte h usko parse krke jis form me get request aati h us form me vo clint ko de deta h 
//  Jab aap JSON format mein data bhejte hain, body-parser middleware JSON data ko JavaScript object mein convert kar deta hai.
//URL-Encoded Parsing: Agar aap form data bhejte hain (jaise application/x-www-form-urlencoded format mein), body-parser us data ko bhi parse karke JavaScript object banata hai.
app.listen( 3000 , () =>
{
  console.log("node is connected");
}) 

app.use( '/person' , personRoute);
app.use('/fooditem' , menuRoute);
// app.get( '/hotelfacility' , (req , res) => 
// {
//      var facility = 
//      {
//         name: "krishna sagar",
//         roomsize: 30*30,
//         totalroom : 60,
//         ac: true
//      }
//      res.send(facilty);
// })