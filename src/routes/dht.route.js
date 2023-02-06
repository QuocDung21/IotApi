const express = require('express');
const router = express.Router();
const dht_controller = require('../controllers/dht.controller')

router.post('/create', dht_controller.dth_create);
router.get('/', dht_controller.dht)
router.get('/:id', dht_controller.dht_details)
router.post('/:id', dht_controller.dht_update)
module.exports = router;