const mongoose = require('mongoose');


mongoose.connect(process.env.MONGOB_URI || 'mongodb://localhost/wayo-brand', { // mongodb databse connection exported to server
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

module.exports = mongoose.connection;