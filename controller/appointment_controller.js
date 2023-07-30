let appointmentmodel = require('../model/appointment_model.js');

const appointment_fixing = (req, res) => {

    let details = {
        Patient_id: req.body.Patient_id,
        Patient_name: req.body.Patient_name,
        Age: req.body.Age,
        Reasons: req.body.Reasons,
        Date: req.body.Date,
        Time: req.body.Time,
        Phone_no: req.body.Phone_no
    }
    appointmentmodel.appointment_fixingmodel(details, (err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, result: result }) }
    })
}

const appointment_accept_reject = (req, res) => {
    let details = {
        A_id: req.params.A_id,
        Fixedappoinment: req.body.Fixedappoinment
    }
    appointmentmodel.accept_reject(details, (err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, data: "update successfully", result: result }) }
    })
}


const Get_allappointments = (req, res) => {

    appointmentmodel.Get_appointment((err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, result: result }) }
    })
}

const Get_acceptappointments = (req, res) => {

    appointmentmodel.Get_accept((err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, result: result }) }
    })
}

const Get_Bookedappointments = (req, res) => {

    appointmentmodel.Get_Booked((err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, result: result }) }
    })
}

const get_patient_appointment = (req, res) => {
    let data = {
        Patient_id: req.params.Id
    }
    appointmentmodel.get_patient_appointment_model(data, (err, result) => {
        if (err) {
            res.json({
                status: 400,
                result: err
            })
        }
        else {
            res.json({ status: 200, result: result })
        }
    })
}

module.exports = {
    appointment_fixing, appointment_accept_reject, Get_allappointments, Get_acceptappointments, Get_Bookedappointments,
    get_patient_appointment
}