import React from 'react'
 import './container.css';

const Container = () => {
  return (
  <>
    <div id='container'>
      <h3>Earn More. Earn Reespect. <br />
      Safety Ensured.</h3><br />
      <p>
        Join 40,000+ partners India, USA, Singapore, UAE and many more
      </p>

    </div>
    <div id='footer'>
    <p class='content' >Share your WhatsApp number and we'll reach out via our WhatsApp Business Account.</p>
    

    <input type="number" name="number" id="input-field"  placeholder='Your Phone Number'/>
    <button type='submit'>Join Us</button>
    
  </div></>

  )
}

export default Container;