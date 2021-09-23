const db = require("./connection");
const {User,Product,Category} = require("../models");

db.once("open", async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'shirts'},
    ]);

    console.log("categories seeded")

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Black T-shirt',
            description: 'one of the rarest types of shirts out there, makes you look a lot slimmer than you actually are',
            image: 'black-t-shirt.jpg',
            category: categories[0]._id,
            price: 300,
            quantity: 2
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: "Billy",
        lastName: "Johnson",
        email: "fakeemail@aol.com",
        password: "passw12345",
        orders: [
            {
                products: [products[0]._id]
            }
        ]
    });

    await User.create({
        firstName: "Jim",
        lastName: "Halibutt",
        email: "realemail@hotmail.com",
        password: "passphrase125",
    })

    console.log("users seeded");

    process.exit();
})