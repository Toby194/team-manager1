const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/player', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection"))
    .catch(err => console.log('Something is wrong.', err));