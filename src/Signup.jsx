import React from 'react'
import { useState } from 'react';
import './Signup.css'
import {FaPaperPlane} from 'react-icons/fa/';
const Signup = () => {
  const [email,setEmail]=useState("");
  const [fName,setfName]=useState("");
  const [lName,setlName]=useState("");
  const [password,setPassword]=useState("");
  const [mobile,setMobile]=useState(0);
  /*
  var mysql = require('mysql');
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
  });

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO signup (email,fName,lName,password,mobile) VALUES ('"+email+"', '"+fName+"','"+lName+"','"+password+"','"+mobile+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  });
*/
  return (
    <div className='signup'>
      <form>
        <label for="email">Email Address:</label>
        <input type="email" placeholder='Your Email Address' id="email" onChange={(event)=>{setEmail(event.target.value)}} required/><br/>
        <label for="fname">First Name:</label>
        <input type="text" placeholder='Your First Name' id="fname" onChange={(event)=>{setfName(event.target.value)}} required/><br/>
        <label for="lname">Last Name:</label>
        <input type="text" placeholder='Your Last Name' id="lname" onChange={(event)=>{setlName(event.target.value)}} required/><br/>
        <label for="mob_no">Mobile Number:</label>
        <input type="number" placeholder='Your Mobile Number' id="mob_no" onChange={(event)=>{setMobile(event.target.value)}} required/><br/>
        <label for="pswd">Password:</label>
        <input type="password" placeholder='Enter Your Password' id="pswd" onChange={(event)=>{setPassword(event.target.value)}} required/><br/>
        <button type="submit">Sign Up <FaPaperPlane/></button>
      </form>
    </div>
  )
}

export default Signup;