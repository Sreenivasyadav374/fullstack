import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from "react-router-dom";
import {useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/dbSlice";

import axios from 'axios';
import './styles.css'

 

function login() {
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const [userName,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const submit=async(e)=>{
    
    e.preventDefault();
    try{
      
    const res=await axios.post('http://localhost:3000/login',{userName:userName,password:password});
    
    if(res.data.message=="Success"){
      //setting the userdata,accesstoken on localstorage
      localStorage.setItem('userId',userName);
      localStorage.setItem('accessToken',res.data.accessToken);
      //calling the setuser function on the store
      dispatch(setUser({userName:userName}));
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
    <div style={{height:'43.45rem',position:'relative', backgroundImage:
                "url('https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg')",backgroundRepeat: 'no-repeat',backgroundSize:'cover'}} className="d-flex justify-content-center align-items-center">
    <img style={{position:'absolute',width:'25%', transform: 'rotate(-15deg)',opacity:'0.5',transformOrigin: '0% 100%'}} className="border rounded-4 shadow p-3 mb-7 bg-white rounded" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni4W_ssx3U1KqS7a7wY_Q4NVU2hW3CP-1jA&usqp=CAU'/>
    <img style={{position:'absolute',width:'25%', transform: 'rotate(15deg)',opacity:'0.5',transformOrigin: '100% 100%'}} className="border rounded-4 shadow p-3 mb-7 bg-white rounded" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni4W_ssx3U1KqS7a7wY_Q4NVU2hW3CP-1jA&usqp=CAU'/>
    <div style={{zIndex:1}} className="d-flex flex-column align-items-center justify-content-center">
    <h1 className="font mainhead">LogIn</h1>
    <Form className="d-flex flex-column border rounded-4 p-5 bg-white shadow p-3 mb-7 bg-white rounded">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="font">Email address</Form.Label>
        <Form.Control onChange={(e)=>{setUsername(e.target.value)}} type="email" placeholder="Enter UserName" />
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="font">Password</Form.Label>
        <Form.Control onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="font" onClick={(e)=>submit(e)} variant="primary">Submit</Button>
      
    </Form>

    <h4 className="mt-4">New Here! <Link to={'/register'}>Sign UP</Link></h4>
    </div>
</div>
  );
}

export default login;
