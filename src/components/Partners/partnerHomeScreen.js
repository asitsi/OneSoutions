import React from 'react'
import styles from '../../styles/partnerhomescreen.module.scss';
import Stripe from './stripe';
import HomeImage from '../../assests/images/home-screen-img.png'; 

const PartnerHomeScreen = () => {
    return (
        <React.Fragment>
            <div className={styles.homebackground}>
                <div className={styles.container}>
                    <div className={styles.row} style={{ display: 'flex' }}>
                        <div className={styles.column}>
                            <div>
                                <h1>Earn More. Earn Respect. Safety Ensured.</h1>
                                <p>Join the most creative and enthusiastic Work community to accelerate your business.</p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <img src={HomeImage} alt="Image 2" />
                        </div>
                    </div>
                </div>
                <Stripe />
            </div>
        </React.Fragment>
    )
}

export default PartnerHomeScreen