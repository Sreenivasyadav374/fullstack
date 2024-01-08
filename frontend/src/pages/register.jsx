import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link,useNavigate} from "react-router-dom";

import axios from 'axios'

 

function register() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const submit=async(e)=>{
    e.preventDefault()
    
    try{
    const res=await axios.post('http://localhost:3000/register',{userName:username,password:password});
    console.log(res.data);
    if(res.data=="Registered successfully"){
      localStorage.setItem('userId',username);
      navigate('/home');
    }
    else{
      alert(res.data);
    }
    }
  
    
    catch(err){
      console.log(err.message)
    }
    

  }
  return (
    <div className="d-flex flex-column h-100 align-items-center">
    <h1 >Sign Up</h1>
    <Form className="d-flex flex-column">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>{setUsername(e.target.value)}} type="email" placeholder="Enter UserName" />
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button onClick={(e)=>submit(e)} variant="primary">Submit</Button>
      
    </Form>
    <h4 className="mt-4">Already a user <Link to={'/'}>LogIn</Link></h4>
</div>
  );
}

export default register;