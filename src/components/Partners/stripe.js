import React from 'react';

// Css
import styles from '../../styles/partnerstript.module.scss';

// Images

// Mui
import { Box, Paper, Button } from '@mui/material';

// components
import Popup from '../popup/popup';
import CustomDropDown from '../CustomDropDown/CustomDropDown';

const Stripe = () => {
    const [ButtonPopup, setButtonPopup] = React.useState(false);

    return (
        <React.Fragment>
            <Paper elevation={3} className={styles.background}>
                <h2>Share your WhatsApp number and we'll reach out via our WhatsApp Business Account.</h2>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box display="flex">
                        <CustomDropDown />
                        {/* <select className={styles.select}>
                            <option value="+91" selected imagesrc={IndianFlag}>
                                <span>
                                    <img src={IndianFlag} alt="indiaflag" className={styles.flagImage} /> +91
                                </span>
                            </option>
                            <option value="option2">Option 2 </option>
                            <option value="option3" >Option 3</option>
                            <option value="option4">Option 4</option>
                        </select> */}
                        <input className={styles.phonenumber} placeholder='Your phone number' />
                    </Box>
                    <Button className={styles.joinButton} onClick={() => setButtonPopup(true)}>
                        Join Us
                    </Button>
                </Box>
            </Paper>
            <Popup
                trigger={ButtonPopup}
                setTrigger={setButtonPopup}
                className="Popup"
                style={{ padding: '1.5rem 0 0 0' }}>
                <div className="popup-inner" style={{ width: '100%', margin: '0', padding: '0' }}>
                    <div style={{padding: '1rem', display: 'flex',alignItems:'center'}}>
                        <img src='https://cdn.pixabay.com/photo/2013/07/13/10/06/affirmative-156538_640.png' alt='rightImage' style={{width: '110px', height: '110px',marginRight: '1rem'}}/>
                        <h2 className='text-capitalize'>Thank you, we have received your details. Our team will get in touch with you on WhatsApp soon. Also you can download the Urban Company Partner app from</h2>
                    </div>
                </div>
            </Popup>
        </React.Fragment>
    )
}

export default Stripe;