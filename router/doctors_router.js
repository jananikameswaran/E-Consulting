const express = require('express');
const router = express.Router();
const doctorcontroller = require('../controller/doctors_controller');
router.post('/doctorregister', doctorcontroller.doctor_reg)
router.post('/doctorlogin', doctorcontroller.doctor_login)
module.exports = router;