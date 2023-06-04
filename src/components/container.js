import React from 'react'
 import './container.css';

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
    <h2>Join Urban Company to change your life</h2>
    </div>
    <div className='para'> <p>
      Urban Company is an app-based marketplace that empowers professional like you to become your own boss
    </p>
    </div>
    <div className='number'>
     <p>40,000+&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      ₹1547Cr&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      1,250,000+

     </p>
    </div>
    <div className='sec-para'>

      <p>Partners already on board&emsp;&emsp;&emsp;&emsp;&emsp;
     
       Paid out to partners in {new Date().getFullYear()}
       &emsp;&emsp;&emsp;&emsp;
     
       Service delivered each month
     </p>
    </div>


  </div>


</>
  )
}

export default Container;
