const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
mongoose.plugin(schema => { schema.options.usePushEach = true });


const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true
});
// new mongoose.Schema({
//     username: String
//   }, {
//     usePushEach: true
//   });
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;