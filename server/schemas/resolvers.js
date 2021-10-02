const { User, Products } = require('../models');
const { signToken } = require('../utils/auth');

// if theres a login dup boi 
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find();
        },
        // get a single user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        // get all products 
        products: async () => {
            return Products.find();
        },
        // get a product by its title
        product: async (parent, { name }) => {
            return Products.findOne({ name })
        }
        
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { user, token };
        },
        login: async (parent, { email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('incorrect credentials ')
            }
            const correctPass = await user.isCorrectPassword(password);

            if(!correctPass){
                throw new AuthenticationError('incorrect credentials ')
            }
            const token = signToken(user);
            return { token, user};
        },

            addProduct: async (parent, args) => {
            const product = await Products.create(args);
            return {product};
        }
    }
}


module.exports = resolvers;