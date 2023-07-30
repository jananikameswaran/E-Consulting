const connection = require('../connection.js');

let appointment_fixingmodel = (details, result) => {
    let insert = `insert into appointments set?`;
    connection.query(insert, details, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })

}
let accept_reject = (details, result) => {

    let update = `update appointments set ? where A_id = '${details.A_id}'`;
    connection.query(update, details, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}


let Get_appointment = (result) => {
    let select = ` select * from appointments `;
    connection.query(select, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}

let Get_accept = (result) => {
    let query = `select * from appointments where Fixedappoinment="accept" and Date = current_date()`;
    connection.query(query, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}

let Get_Booked = (result) => {
    let query = `select * from appointments where Fixedappoinment="Booked"`;
    connection.query(query, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}

let get_patient_appointment_model = (data, result) => {
    let query = `select * from appointments where Patient_id ='${data.Patient_id}'`;
    connection.query(query, (err, data) => {
        if (err) {
            result(null, err)
        }
        else {
            result(null, data)
        }
    })
}

module.exports = { appointment_fixingmodel, accept_reject, Get_appointment, Get_accept, Get_Booked, get_patient_appointment_model }