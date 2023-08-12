import './App.css';
import React from 'react'
import {Nav, Navbar, NavLink}  from 'react-bootstrap'
import { useLocation} from 'react-router-dom';
import TimeInfo from './TimeInfo'

const Navigationbar = () => {
  const location = useLocation();

  const clearStorage = (e) => {
    e.preventDefault();
    sessionStorage.clear("userName")
    alert('Session Storage Has Been Cleared');
  }
  
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{width:"100%"}} activeKey={location.pathname}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/about/defaultname" >About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/registration">Registration</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="#" onClick={clearStorage} className="btn btn-dark">Logout</NavLink>
            <NavLink className="ms-auto"><TimeInfo/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigationbar



