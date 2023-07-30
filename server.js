const express = require('express');
const app = express();
app.use(express.json());
app.listen(process.env.PORT || 3200)
app.get("/", function (req, res) {
    res.send("sales attendance")
});
const doctorRouter = require('./router/doctors_router.js');
const patientRouter = require('./router/patients_router.js');
const appointRouter = require('./router/appointment_router.js')
app.use('/doctor', doctorRouter)
app.use('/patient', patientRouter)
app.use('/appoint', appointRouter)

