const { Schema, model } = require('mongoose'); // import schema and model from mongoose

const CategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
})

const Categories = model('Category', CategorySchema);

module.exports = Categories;