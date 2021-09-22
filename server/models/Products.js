const { Schema, model } = require('mongoose');


var productsSchema = new Schema(
    {
        name: String,
        catagory: String,
        subcategory: {
            type: String,
            model: {
                type: String,
                colour: {
                    name: String,
                    image: String
                },
                size: {
                    val: Number,
                    price: Number
                }
            }
        },
        description: String,
        created_at: { type: Date},
        updated_at: { type: Date, default: Date.now },
        updated: { type: Date, default: Date.now}
    }
);

const Products = model('Products', productsSchema)

module.exports = Products;

