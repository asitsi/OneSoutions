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
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxD7ymjnXGjDDslg7UX3wj4P2hZGb08dXV-sf0LhZ0-9nuLMdx1ajy-tBdgmR7uw1Gglw/exec';
    const [ButtonPopup, setButtonPopup] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleNumber = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setLoading(true);
        //  data save to Google sheet
        await fetch(scriptUrl, { method: "POST", body: data })
            .then((res) => {
                setButtonPopup(true);
                setLoading(false);
                console.log("SUCCESSFULLY SUBMITTED");
            })
            .catch((err) => {
                setLoading(false);
                console.log(err)
            });
    }

    return (
        <React.Fragment>
            <Paper elevation={3} className={styles.background}>
                <h2>Share your WhatsApp number and we'll reach out via our WhatsApp Business Account.</h2>
                <Box
                    m={1}
                >
                    <form onSubmit={handleNumber} className={styles.formData}>
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
                            <input type='text' className={styles.phonenumber} placeholder='Your phone number' name='Number' />
                        </Box>
                        <Button type="submit" className={styles.joinButton}>
                            {loading ? "Loading..." : "Join Us"}
                        </Button>
                    </form>
                </Box>
            </Paper>
            <Popup
                trigger={ButtonPopup}
                setTrigger={setButtonPopup}
                className="Popup"
                style={{ padding: '1.5rem 0 0 0' }}>
                <div className="popup-inner" style={{ width: '100%', margin: '0', padding: '0' }}>
                    <div style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}>
                        <img src='https://cdn.pixabay.com/photo/2013/07/13/10/06/affirmative-156538_640.png' alt='rightImage' style={{ width: '110px', height: '110px', marginRight: '1rem' }} />
                        <h2 className='text-capitalize'>Thank you, we have received your details. Our team will get in touch with you on WhatsApp soon. Also you can download the One Solutions Company Partner app from</h2>
                    </div>
                </div>
            </Popup>
        </React.Fragment>
    )
}

export default Stripe;