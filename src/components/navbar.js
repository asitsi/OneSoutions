import React from 'react';
// css
import './navbar.css';
// images
import logo from "../assests/images/logo.png";
import flag from "../assests/images/india.png"


const Navbar = () => {
  return (
    
      <React.Fragment>

    
      <nav id="navbar">
        <div id="logo">
            <img src={logo} alt='logoImg' id='one' />
        </div>
        <ul>
            
            <h4>Urban</h4>
            
            <span></span>Company
        </ul>

        <ul >
            
            <li className="item"><a href='/'>About Us</a></li>
            <li className="item" ><a href='/'>Book a service</a>
            </li>

        </ul>
    <img src={flag} alt="flag" id='flag' />

        <div className="dropdown-menu" >
    

   <ul>
     <select name="flag" id="dropdown-content">
    
        <option value="pune">Pune</option> 
        <option value="mumbai">Mumbai</option> 
        <option value="delhi">Delhi</option> 
        <option value="goa">Goa</option> 
    </select>
  
        </ul>
        </div>


    </nav>
      </React.Fragment>
  
  );
}

export default Navbar;
