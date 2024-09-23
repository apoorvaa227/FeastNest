const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: 
    {
        type: String,   
        required: true,
    },
    age: 
    {
        type: Number,
        required: true,
    },
    work:
    {
        type: String,
        enum: ['manager', 'owner', 'waiter', 'chef'],
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    }
})
// const person: Yeh ek variable declaration hai. Yahan, person ek variable hai jo Mongoose model ko store karta hai. Iska use aage CRUD operations (Create, Read, Update, Delete) ke liye kiya jayega.
// mongoose.model: Yeh ek function hai jo Mongoose model banane ke liye use hoti hai. Is function ke do arguments hote hain. Pehla argument ek string hota hai jo model ka naam hota hai. Dusra argument ek schema hota hai jo model ke fields ko define karta hai.
const person = mongoose.model('person', personSchema);
module.exports = person;