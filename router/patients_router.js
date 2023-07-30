const express = require('express');
const router = express.Router();
const patientcontroller = require('../controller/patients_controller');
router.post('/patientregister',patientcontroller.patient_reg)
router.post('/patientlogin',patientcontroller.patient_login)
router.get('/getbookpatients',patientcontroller.patient_bookedappointment)
router.get('/patientsappointment_getbyid/:Id',patientcontroller.patient_getbyid)
module.exports=router;