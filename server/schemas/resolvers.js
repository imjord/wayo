const { User, Products } = require('../models');



const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find();
        },
        // get a single user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
        }
        // // get all products 
        // products: async () => {
        //     return Products.find();
        // },
        // // get a product by its title
        // product: async (parent, { title }) => {
        //     return Products.findOne({ title })
        // }
        
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return { user };
        },
        addProduct: async (parent, args) => {
            const product = await Products.create(args);
            return {product};
        }
    }
}


module.exports = resolvers;