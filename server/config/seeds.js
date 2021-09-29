const db = require('./connection') // connect to our mondb db file
const { User, Products } = require('../models'); // import our models that juan boi made

db.once('open', async () => {
    // await Categories.deleteMany();
    // // insert name strings into the categories model using insermany function
    // const myCategories = await Categories.insertMany([
    //     {name: 'T-Shirts'},
    //     {name: 'Hoodies'}
    // ]);

    // console.log('Categories done');

    await Products.deleteMany();

    const myProducts = await Products.insertMany([
        {
            name: 'Wayo Tshirt',
            description: 'A flashy wayo tshirt. Very Rare and limited edition.',
            // category: Categories[0]._id,
            price: 15.99,
            image: 'BLAHBALH'
        },
        {
            name: 'Wayo Hoodie',
            description: 'A totally cool hoodie to keep you fresh and warm. Limited Edition',
            // category: Categories[1]._id,
            price: 25.99,
            image: 'HOODIE.PNG'
        },    
    
    ]);
    console.log('products doine')

    await User.deleteMany();

    await User.create

    process.exit();

})