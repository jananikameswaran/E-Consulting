const connection = require('../connection.js');
const crypto =require('crypto');
var CryptoJS = require("crypto-js");

let doctorregister = (details,result)=>{
    let select =`select * from doctors where Mobile_no ='${details.Mobile_no}' or Password= '${details.Password}'`;
    connection.query(select,(errr,data1)=>{
        if(errr){
            result(null,errr)
        }
        else{
        if(data1.length==0){
        let query=`insert into doctors set ?`;
         connection.query(query,details,(err,data)=>{
        if(err){
            result(null,err)
        }else{
            result(null,data)
        }
    })
        }
        else{
            var msg = "Mobile number  (or)  Password already exists "
            result(null,msg)
        }
        }
    })
    
}

let doctorlogin=(data,result)=>{
    console.log(data,"data");
    let query = `select * from doctors where
    Doctor_name = '${data.Doctor_name}' and Password='${data.Password}'`;
    connection.query(query,(err,values)=>{
        if(err){
            console.log(err);
            result(null,err);
        }
        else{
            console.log(values);
            let array =[];
            array=values;
            if(array.length == 0){
                result(null,{status:400,message:"invalid name or Password ",loginstatus : false});

            }
            else{
                result(null,{status:200,message:"login successfully",loginstatus:true})
            }
        }
     })
}

module.exports = {doctorregister,doctorlogin}
    
