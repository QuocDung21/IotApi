const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DataSchema = new Schema({
    email: { type: String, unique: true, require: true },
    dht: [
        {
            nhietdo: { type: Number, required: false },
            doam: { type: Number, required: false },
            updatedAt: { type: Date, required: false },
            createAt: { type: Date, required: false }
        }
    ],
    sensor: {
        mhsensor: { type: Number, required: false }
    },
    control: { type: Number, required: false },
    connect: { type: Number, required: false },
    dhtlog: { type: Array, required: false },
})




module.exports = mongoose.model('Dht', DataSchema)
