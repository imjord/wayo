const mongoose = require('mongoose');

const { Schema } = mongoose;


var productsSchema = new Schema(
{   
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        require: true,
        minlength: 0.99
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
},
);

const Products = mongoose.model('Products', productsSchema)

module.exports = Products;

