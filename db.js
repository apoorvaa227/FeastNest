const mongoose = require('mongoose');
require('dotenv').config();
// net start MongoDB and net stop MongoDB
// hmari community 6.0 version hai
// const mongoURL = process.env.DB_URL_LOCAL;
const mongoURL = process.env.DB_URL;
// abhi tk mongodbCompass me db nhi bna hua hai pr jaise hi hm connection bnayenge ye db khud ba khud bn jayega
// connection of  mongodb is line jisse  kud ba kud hostel management naam ka db  establish ho jati hai
mongoose.connect(mongoURL);
// yehi oject h jiss event and interaction handle hota h db ke sath 
const db = mongoose.connection;
db.on("connected" , () => {console.log("db is connected") });
// connection btayega ki on "connected is eventlistener"
db.on("disconnected" , () => {console.log("db is disconnected") });
db.on("error" , (err) => {console.log("db is connected to error ") });
 module.exports = db ;