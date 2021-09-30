const db = require('./connection') // connect to our mondb db file
const { User, Products, Categories } = require('../models'); // import our models that juan boi made

db.once('open', async () => {  // first time this connection opens it is ran once

    await Categories.deleteMany();
    // insert name strings into the categories model using insermany function
    const myCategories = await Categories.insertMany([
        {name: 'T-Shirts'},
        {name: 'Hoodies'},
        {name: 'Leggings'},
        {name: 'Flip-flops'}
    ]);

    console.log('Categories done'); // categories has been inserted 

    await Products.deleteMany();

    const myProducts = await Products.insertMany([
        {
            name: 'Wayo Tshirt',
            description: 'A flashy wayo tshirt. Very Rare and limited edition.',
            category: myCategories[0]._id,
            price: 15.99,
            image: '.../client/src/assets/images/WAYO_01.PNG'
        },
        {
            name: 'Wayo Hoodie',
            description: 'A totally cool hoodie to keep you fresh and warm. Limited Edition',
            category: myCategories[1]._id,
            price: 25.99,
            image: '.../client/src/assets/images/WAYO_HOODIE.PNG'
        },  
        {
            name: 'Wayo Leggings',
            description: 'Some awesome Leggings for anyone!',
            category: myCategories[2]._id,
            price: 5.99,
            image: '.../client/src/assets/images/WAYO_LEGGINGS.PNG'
        },  
        {
            name: 'Wayo Flip Flops',
            description: 'Get ur summer on in these sweet flops!',
            category: myCategories[3]._id,
            price: 2.99,
            image: '.../client/src/assets/images/WAYO_FLIPFLOPS.PNG'
        }, 
        {
            name: 'Wayo rare Hoodie',
            description: 'Deadstock only 1 left',
            category: myCategories[1]._id,
            price: 420.69,
            image: '.../client/src/assets/images/WAYO_RARE_HOODIE.PNG'
        }, 
        {
            name: 'Wayo RARE Hoodie',
            description: 'Deadstock no more left',
            category: myCategories[1]._id,
            price: 250.99,
            image: '.../client/src/assets/images/WAYO_RARE01.PNG'
        },    
        {
            name: 'Wayo SPORTS',
            description: 'AWESOME SPORTS TOP YA!',
            category: myCategories[0]._id,
            price: 25.99,
            image: '.../client/src/assets/images/WAYO_SPORT.PNG'
        },  
        {
            name: 'Wayo PINK SHIRT WOOOO',
            description: 'A NICE SHIRT',
            category: myCategories[0]._id,
            price: 25.99,
            image: '.../client/src/assets/images/WAYO_PINK.PNG'
        },  
        {
            name: 'Wayo Professional shirt',
            description: 'wayo but upside down. classy. very classy.',
            category: myCategories[0]._id,
            price: 89.99,
            image: '.../client/src/assets/images/WAYO_PROFESSIONAL.PNG'
        },  
        {
            name: 'Wayo Blue long sleeve shirt',
            description: 'pretty rare so its expensive ',
            category: myCategories[0]._id,
            price: 109.99,
            image: '.../client/src/assets/images/WAYO_02.PNG'
        },  
    
    ]);
    console.log('products doine')

// do np,m run seeds

    process.exit();

})