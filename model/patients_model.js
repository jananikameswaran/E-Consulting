const connection = require('../connection.js');
const crypto = require('crypto');
var CryptoJS = require("crypto-js");

let patientregister = (details, result) => {
    let select = `select * from patients where Phone_no ='${details.Phone_no}' or Password= '${details.Password}'`;
    connection.query(select, (errr, data1) => {
        if (errr) {
            result(null, errr)
        }
        else {
            if (data1.length == 0) {
                let query = `insert into patients set ?`;
                connection.query(query, details, (err, data) => {
                    if (err) {
                        result(null, err)
                    } else {
                        result(null, data)
                    }
                })
            }
            else {
                var msg = " Phone_no  (or)  Password already exists "
                result(null, msg)
            }
        }
    })

}

let patientlogin = (data, result) => {
    console.log(data, "data");
    let query = `select * from patients where
    Patient_name = '${data.Patient_name}' and Password='${data.Password}'`;
    connection.query(query, (err, values) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        else {
            console.log(values);
            let array = [];
            array = values;
            if (array.length == 0) {
                result(null, { status: 400, message: "invalid name or Password ", loginstatus: false });

            }
            else {
                result(null, { status: 200, message: "login successfully", loginstatus: true })
            }
        }
    })
}

let Booked_appointment = (result) => {
    let select = ` select * from patients `;
    connection.query(select, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}

let Bookedappointment_byid = (data, result) => {
    let query = `select * from patients  where Id='${data.Id}'`;
    connection.query(query, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}
module.exports = { patientregister, patientlogin, Booked_appointment, Bookedappointment_byid }

