const mongoose = require('mongoose');


mongoose.connect(process.env.MONGOB_URI || 'mongodb://localhost/wayo-brand', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;