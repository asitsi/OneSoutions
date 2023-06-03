import React from 'react'
import './footer.css';
import googleplay from "../assests/images/googleplay.png";
import appstore from "../assests/images/appstore.png";
import {InstagramIcon} from '@mui/icons-material/Instagram';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    
<div className="footer">
<div className="container">
<div className="row">
  {/* column 1 */}
  <div className='col'>
    
<h4>Company</h4>
<ul className='list-unstyled'>
  <li>
    <a href='/'> About us</a>
  </li>
  <li>
   <a href='/'> Anti Discrimination Policy</a>
    </li>
  <li>
    <a href='/'>Information Security Policy Statement</a>
    </li>
  <li>
    <a>Careers</a>
    </li>
</ul>
  </div>

  {/* column 2*/}


  <div className='col'>
    
<h4>For Professionals</h4>
<ul className='list-unstyled'>
  <li>

    <a href='/'>Privacy Policy</a>
  </li>
  <li><a href='/'>Partner Welfare Policy</a>
  </li>
  <li><a href='/'>Terms & conditions</a></li>
  <li><a href='/'>Community</a></li>
  <li><a href='/'>Blog</a></li>
</ul>

  </div>

  {/* column 3 */}

  <div className='col'>
<h4>For Customers</h4>
<ul className='list-unstyled'>
  <li><a href='/'>Book a service</a></li>
</ul>
  </div>
  {/* column 4 */}

  <div className="col">
    <h4>Social Links</h4>
    <ul className='social-icons'>
      <li>
        <a href='url' target='blank'>
        <icon className="fa facebook" src={FacebookIcon} ></icon> 
        </a>
      
      <a href='url' >
      <icon className="fa twitter" src={TwitterIcon}></icon>  
        </a>
      
         <a href='url' target='blank'>
      <icon className="fa insta" src={InstagramIcon} ></icon>
        </a> 
      <icon className="fa linkedin" src={LinkedInIcon}></icon>
        </li>
   </ul>
  </div>
  </div>

  <hr />
  <div className='row'>
    <p className='col-sm'>
           @copy;{new Date().getFullYear()}UrbanClap Technologies India Pvt. Ltd.
    </p>
    <img src={googleplay} alt='googleplay'  />
    <img src={appstore}  alt="appstore" />
  </div>
</div>
</div>

  )
}

export default Footer;
