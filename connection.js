const mysql = require('mysql');
const connection =mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'e_consulting',
})
connection.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('Database Connected')
    }
})
module.exports = connection;

// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host:'explorashoppev1.cv4nlmehegez.ap-south-1.rds.amazonaws.com',
//     user:"sales_admin",
//     password:"admin@123456",   
//     database:"sales_attendance" 
// })
// // const con = mysql.createConnection({
// //     host:'localhost',
// //     user:"root",
// //     password:"root",
// //     database:"sales_attendance" 
// //     // database:"new_sales" 
// // })
// con.connect(function(err){
//     if(err){
        
//         console.log(err);
//     }
//     else{
//         console.log("Database Connected")
//     }
// });
// module.exports = con;


