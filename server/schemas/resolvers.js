const { User, Products } = require('../models');



const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find();
        },
        
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return { user };
        }
    }
}


module.exports = resolvers;