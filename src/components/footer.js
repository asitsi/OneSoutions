import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <div id='footer'>
      <p class='content' >Share your WhatsApp number and we'll reach out via our WhatsApp Business Account.</p>
      

      <input type="number" name="number" id="input-field"  placeholder='Your Phone Number'/>
      <button type='submit'>Join Us</button>
      
    </div>
  )
}

export default Footer;
