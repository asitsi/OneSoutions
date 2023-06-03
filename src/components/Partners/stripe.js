import React from 'react';

// Css
import styles from '../../styles/partnerstript.module.scss';

// Images
import IndianFlag from '../../assests/images/indian-flag.png';

// Mui
import { Box, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const Stripe = () => {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        // Add more options as needed
    ];
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
                        <select className={styles.select}>
                            <option value="+91" selected><span><img src={IndianFlag} alt="indiaflag" className={styles.flagImage} /></span> +91</option>
                            <option value="option2">Option 2</option>
                            <option value="option3" >Option 3</option>
                            <option value="option4">Option 4</option>
                        </select>
                        <input className={styles.phonenumber} placeholder='Your phone number' />
                    </Box>
                    <Button className={styles.joinButton}>
                        Join Us
                    </Button>
                </Box>
                <img src={IndianFlag} alt="indiaflag" className={styles.flagImage} />
            </Paper>
        </React.Fragment>
    )
}

export default Stripe;