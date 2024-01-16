import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function navbar() {
  const navigate=useNavigate()
  const logout=async()=>{
    try{
    const res=await axios.get('http://localhost:3000/logout');
    console.log(res)
    localStorage.clear();
    navigate('/login')}
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <Navbar className='rounded-bottom-3' bg="black" data-bs-theme="dark">
        <Container style={{fontSize:'larger'}} className="d-flex justify-content-between">
          
          <Nav className=''>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            
          </Nav>
          <Button variant="danger" onClick={logout}>LogOut</Button>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
}

export default navbar
