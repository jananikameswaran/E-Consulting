const express = require('express');
const router = express.Router();
const appointmentcontroller = require('../controller/appointment_controller.js');
router.post('/fix_appointment', appointmentcontroller.appointment_fixing)
router.put('/accept_reject/:A_id', appointmentcontroller.appointment_accept_reject)
router.get('/getaallapppointments', appointmentcontroller.Get_allappointments)
router.get('/getacceptappointments', appointmentcontroller.Get_acceptappointments)
router.get('/getbookedappointments', appointmentcontroller.Get_Bookedappointments)
router.get('/getappointment/:Id', appointmentcontroller.get_patient_appointment)
module.exports = router;