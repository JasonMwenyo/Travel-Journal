import React from 'react';
import travelLogo from '../assets/images/globe.svg';
import '../components/Navbar.css'

function Navbar() {
    return (
        <nav className='navbar--logo'>
            <img width={"100px"} src={travelLogo} alt='logo' />
            <h4>My travel Journal</h4>
        </nav>
    )
}

export default Navbar