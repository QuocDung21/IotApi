const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
module.exports = mongoose.connect('mongodb+srv://quocdung:123@quocdung.milm4.mongodb.net/test')
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err.message))