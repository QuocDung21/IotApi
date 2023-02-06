const DhtModel = require("../models/Data.model");
const dth_create = function (req, res) {
    let dht = new DhtModel(
        {
            email: req.body.email,
            dht: [
                {
                    nhietdo: req.body.dht.nhietdo ? req.body.dht.nhietdo : 0,
                    doam: req.body.dht.doam ? req.body.dht.doam : 0,
                    createAt: Date.now()
                }
            ],
            sensor: {
                mhsensor: req.body.sensor.mhsensor ? req.body.sensor.mhsensor : 0
            },
            control: req.body.control ? req.body.control : 0,
            connect: req.body.connect ? req.body.connect : 0
        }
    );

    DhtModel.find({ email: req.body.email }, (err, dt) => {
        if (!err) {
            dht.save(function (err) {
                if (err) {
                    res.json({ err: err.message, status: 404 });
                } else {
                    res.json({ status: 200, data: dht })
                }

            })
        } else {
            res.json({ err: err.message, status: 404, message: "User already exist" })
        }
    })


};

// const dhtCreateArr = (req, res) => {

// }

const dht = (req, res) => {
    DhtModel.find({}, function (err, dht) {
        if (err) {
            res.json({ err: err.message, status: 404 });
        } res.json({ status: 200, data: dht });
    });
}

const dht_details = (req, res) => {
    const id = req.params.id
    DhtModel.findById(id, function (err, dht) {
        if (!err) {
            res.json({ status: 200, data: dht })
        } else {
            res.json({ status: 404, err: err.message })

        }
    });
}

const dht_update = (req, res) => {
    const data = {
        email: req.body.email,
        dht: {
            email: req.body.email,
            dht: {
                nhietdo: req.body.dht.nhietdo,
                doam: req.body.dht.doam,
                createAt: Date.now()
            },
            sensor: {
                mhsensor: req.body.sensor.mhsensor
            },
            control: req.body.control,
            connect: req.body.connect
        }
    }
    DhtModel.findByIdAndUpdate(req.params.id, data, (err, dht) => {
        if (!err) {
            return res.json({ status: 200, message: "updated successfully" });
        } else {
            res.json({ status: 404, err: err.message })
        }
    })
}


module.exports = { dth_create, dht, dht_details, dht_update };