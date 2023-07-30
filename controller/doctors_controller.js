let doctormodel = require('../model/doctors_model.js');
const crypto = require('crypto');
var CryptoJS = require('crypto-js');
const { Buffer } = require('buffer');
const doctor_reg = (req, res) => {

    let details = {
        Doctor_name: req.body.Doctor_name,
        Specialist: req.body.Specialist,
        Password: Buffer.from(req.body.Password).toString('base64'),
        Mobile_no: req.body.Mobile_no
    }
    doctormodel.doctorregister(details, (err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, result: result }) }
    })
}

let doctor_login = (req, res) => {
    console.log(req.body);
    var Passwd = Buffer.from(req.body.Password).toString('base64')
    console.log(Passwd)
    let data = {
        Doctor_name: req.body.Doctor_name,
        Password: Passwd
    }

    doctormodel.doctorlogin(data, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })

}

module.exports = { doctor_reg, doctor_login }