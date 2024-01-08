import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from "react-router-dom";

import axios from 'axios';

 

function login() {
  const navigate=useNavigate()

  const [userName,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const submit=async(e)=>{
    
    e.preventDefault();
    try{
      
    const res=await axios.post('http://localhost:3000/login',{userName:userName,password:password});
    
    if(res.data.message=="Success"){
      localStorage.setItem('userId',userName);
      localStorage.setItem('accessToken',res.data.accessToken);
      navigate('/home');
    }
    else{
      alert(res.data.message)
    }
    
    }
    catch(err){
      console.log(err.message)
    }
  
  }
  return (
    <div className="d-flex flex-column h-100 align-items-center">
    <h1 >LogIn</h1>
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
    <h4 className="mt-4">New Here! <Link to={'/register'}>Sign UP</Link></h4>
</div>
  );
}

export default login;
