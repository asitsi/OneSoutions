import React from 'react';
import './navbar.css';
import logo from "../assests/images/Uc-logo.png"

import flag from "../assests/images/india.png"
const Navbar = () => {
  return (
    
      <React.Fragment>

    
      <nav id="navbar">
        <div id="logo">
            <img src={logo} alt='logoImg' />
        </div>
        
        <ul>
            <h5>Urban</h5>
            <span></span>Company
            
            <li className='item' ><a href='/'>Book a service</a>
            </li>
            <li className="item"><a href='/'>About Us</a></li>

        </ul>
        <div className="dropdown-menu" >
    <img src={flag} alt="flag" />
    <select name="flag" id="dropdown-content"> 
        <option value="pune">Pune</option> 
        <option value="mumbai">Mumbai</option> 
        <option value="delhi">Delhi</option> 
        <option value="goa">Goa</option> 
    </select>
  
</div>

    </nav>
      </React.Fragment>
  
  );
}

export default Navbar;
