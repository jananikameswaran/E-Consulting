let patientmodel = require('../model/patients_model');
const crypto = require('crypto');
var CryptoJS = require('crypto-js');
const { Buffer } = require('buffer');
const patient_reg = (req, res) => {

    let details = {
        Patient_name: req.body.Patient_name,
        Age:req.body.Age,
        Profession: req.body.Profession,
        Password: Buffer.from(req.body.Password).toString('base64'),
        Phone_no: req.body.Phone_no,
        A_id:req.body.A_id
    }
    patientmodel.patientregister(details, (err, result) => {
        if (err) { res.json({ status: 400, result: err }) }
        else { res.json({ status: 200, result: result }) }
    })
}

let patient_login = (req, res) => {
    console.log(req.body);
    var Passwd = Buffer.from(req.body.Password).toString('base64')
    console.log(Passwd)
    let data = {
        Patient_name : req.body.Patient_name,
        Password: Passwd
    }

    patientmodel.patientlogin(data, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })

}

const patient_bookedappointment = (req,res)=>{
   
    patientmodel.Booked_appointment((err,result)=>{
        if(err){res.json({status:400,result:err})}
        else{res.json({status:200,result:result})}
    })    
}


const patient_getbyid = (req,res)=>{
    let data={
        Id:req.params.Id
    }
    patientmodel.Bookedappointment_byid(data,(err,result)=>{
        if(err){res.json({status:400,result:err})}
        else{res.json({status:200,result:result})}
    })    
}

module.exports = { patient_reg, patient_login,patient_bookedappointment,patient_getbyid }