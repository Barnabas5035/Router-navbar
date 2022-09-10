import React from 'react'
import{Link} from "react-router-dom"
import{FaBeer ,FaBars,FaBabyCarriage,FaBoxOpen} from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-container'>
            <Link to="/" className='nav-logo'>Mosco Farm ltd <FaBars className='fas'/></Link>
        <ul className='nav-menu active'>
            <li className='nav-item'>
                <Link to="/" className='nav-links'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/about" className='nav-links'>About</Link>
                
            </li>
            <li className='nav-item'>
            <Link to="/service" className='nav-links'>Service</Link>
            </li>
        </ul>
        <div><FaBoxOpen className='nav-icon' /></div>
        </div>
    </nav>
  )
}

export default Navbar