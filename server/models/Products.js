const { Schema, model } = require('mongoose');


var productsSchema = new Schema(
    {
        name: String,
        catagory: String,
        description: String,
        price: String,
        created_at: { type: Date},
        updated_at: { type: Date, default: Date.now },
        updated: { type: Date, default: Date.now}
    }
);

const Products = model('Products', productsSchema)

module.exports = Products;

