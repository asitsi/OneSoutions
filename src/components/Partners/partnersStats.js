import React from 'react'
import styles from '../../styles/partnersStats.module.scss';
import style from '../../styles/container.module.scss';
import { Paper } from '@mui/material';

const PartnersStats = () => {
    return (
        <React.Fragment>
            <div className={styles.PartnersStatsBackground}>
                <div className={style.container}>
                    <div className={styles.heading}>
                        <h1>Join One Solutions to change your life</h1>
                        <p>One Solutions is an app-based marketplace that empowers professional like you to become your own boss</p>
                    </div>
                    <div className={styles.cards}>
                        <Paper className={styles.cardPaper}>
                            <h1>40,000+</h1>
                            <h6>Partners already on board</h6>
                        </Paper>
                        <Paper className={styles.cardPaper}>
                            <h1>₹1547Cr</h1>
                            <h6>Paid out to partners in {new Date().getFullYear()}</h6>
                        </Paper>
                        <Paper className={styles.cardPaper}>
                            <h1>1,250,000+</h1>
                            <h6>Service delivered each month</h6>
                        </Paper>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PartnersStats