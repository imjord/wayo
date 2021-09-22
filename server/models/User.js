const { Schema, model } = require('mongoose');
const bcrypt = require()

const userSchema = new Schema(
<<<<<<< HEAD
    {
        
=======
    {   username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
>>>>>>> 41c43a8e4f217f487d5e2a701f36cd7b42927c9e
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
    },
);

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
