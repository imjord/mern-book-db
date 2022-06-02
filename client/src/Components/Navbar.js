import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from '../App'
import Books from './Books'
import CreateBooks from './CreateBooks'



const Navbar = () => {
  return (
  
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>Book DB</Link>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
        {/* <div className='collapse navbar-collapse' id='navbarNav'> */}
            <ul className='navbar-nav'>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/'>Home <span className='sr-only'></span></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/books'>Books</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/createbooks'>Insert Book</Link>
                </li>
            </ul>
       
        {/* </div> */}
        
    </nav>
 
  )
}

export default Navbar