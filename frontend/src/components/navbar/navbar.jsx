import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import navsvg from '../../../public/user-solid.svg'

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
  function CustomLink({to,children}){
  const path=window.location.pathname;
  return(
    <Link className={path===to ? "link active":'link'} to={to}>{children}</Link>
  )
}
  
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div className='scrollbar'></div>
      <div className='nav-bar'>
          {/* <section className='nav-logo'>
            <img classname='' src={navsvg} height={"34.95px"}></img>
          </section> */}
          <div className='nav-links'>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/profile">Profile</CustomLink>
            <CustomLink to="/employees">Employees</CustomLink>
          </div>
          <div className='button'>
          <Button className='logout-button' onClick={logout}>LogOut</Button>
          </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default navbar;

