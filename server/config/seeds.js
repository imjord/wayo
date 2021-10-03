const db = require('./connection') // connect to our mondb db file
const { User, Products } = require('../models'); // import our models that juan boi made

db.once('open', async () => {  // first time this connection opens it is ran once

    
    console.log('Categories done'); // categories has been inserted 
    await Products.deleteMany();

    const myProducts = await Products.insertMany([
        {
            name: 'Wayo Tshirt',
            description: 'A flashy wayo tshirt. Very Rare and limited edition.',
            price: 15.99,
            image: './assets/images/WAYO_01.PNG'
        },
        {
            name: 'Wayo Hoodie',
            description: 'A totally cool hoodie to keep you fresh and warm. Limited Edition',
            price: 25.99,
            image: '.../client/src/assets/images/WAYO_HOODIE.PNG'
        },  
        {
            name: 'Wayo Leggings',
            description: 'Some awesome Leggings for anyone!',
            price: 5.99,
            image: '.../client/src/assets/images/WAYO_LEGGINGS.PNG'
        },  
        {
            name: 'Wayo Flip Flops',
            description: 'Get ur summer on in these sweet flops!',
            price: 2.99,
            image: '.../client/src/assets/images/WAYO_FLIPFLOPS.PNG'
        }, 
        {
            name: 'Wayo rare Hoodie',
            description: 'Deadstock only 1 left',
            price: 420.69,
            image: '.../client/src/assets/images/WAYO_RARE_HOODIE.PNG'
        }, 
        {
            name: 'Wayo RARE Hoodie',
            description: 'Deadstock no more left',
            price: 250.99,
            image: '.../client/src/assets/images/WAYO_RARE01.PNG'
        },    
        {
            name: 'Wayo SPORTS',
            description: 'AWESOME SPORTS TOP YA!',
            price: 25.99,
            image: '.../client/src/assets/images/WAYO_SPORT.PNG'
        },  
        {
            name: 'Wayo PINK SHIRT WOOOO',
            description: 'A NICE SHIRT',
            price: 25.99,
            image: '.../client/src/assets/images/WAYO_PINK.PNG'
        },  
        {
            name: 'Wayo Professional shirt',
            description: 'wayo but upside down. classy. very classy.',
            price: 89.99,
            image: '.../client/src/assets/images/WAYO_PROFESSIONAL.PNG'
        },  
        {
            name: 'Wayo Blue long sleeve shirt',
            description: 'pretty rare so its expensive ',
            price: 109.99,
            image: '.../client/src/assets/images/WAYO_02.PNG'
        },  
    
    ]);
    console.log('products doine')

// do np,m run seeds

    process.exit(); // exit out of the npm seed 

})