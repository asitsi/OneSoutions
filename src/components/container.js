import React from 'react'
import './container.css';
import { Paper } from '@mui/material';

const Container = () => {
  return (
    <>
      {/* <div >
      <h3>Earn More. Earn Reespect. <br />
      Safety Ensured.</h3><br />
      <p>
        Join 40,000+ partners India, USA, Singapore, UAE and many more
      </p>

    </div>
    <div >
    <p >Share your WhatsApp number and we'll reach out via our WhatsApp Business Account.</p>
  
    <input type="number" name="number"  placeholder='Your Phone Number'/>
    <button type='submit'>Join Us</button>
    
  </div> */}

      <div className='main-div'>
        <div className='heading'>
          <h1>Join One Solutions to change your life</h1>
          <p>One Solutions is an app-based marketplace that empowers professional like you to become your own boss</p>
        </div>
        <div className='cards'>
          <Paper className='card-paper'>
            <h1>40,000+</h1>
            <h6>Partners already on board</h6>
          </Paper>
          <Paper className='card-paper'>
            <h1>₹1547Cr</h1>
            <h6>Paid out to partners in {new Date().getFullYear()}</h6>
          </Paper>
          <Paper className='card-paper'>
            <h1>1,250,000+</h1>
            <h6>Service delivered each month</h6>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default Container;
