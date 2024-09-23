const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    price:
    {
        type: Number,
        required: true,
    },
    category:
    {
        type: String,
        enum: ['veg', 'non-veg'],
        required: true,
    },
    incredient:
    {
        type: [String],
       
    }
    
});
const fooditem = mongoose.model('menu' , menuSchema);
module.exports = fooditem;
 