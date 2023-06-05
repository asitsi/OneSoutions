import React from 'react';
import style from '../../styles/container.module.scss';
import styles from '../../styles/partnersFooter.module.scss';

import logo from '../../assests/images/logo.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const PartnersFooter = () => {
    return (
        <React.Fragment>
            <div className={style.partnerFooter}>
                <div className={style.container}>
                    <div className={styles.logo}>
                        <img src={logo} alt='logoImg' />
                    </div>
                    <div className={styles.footerRow}>
                        <div className={styles.footerColumn}>
                            {/* column 1 */}
                            <div className={styles.headtable}>
                                <h4>Company</h4>
                                <ul className={styles.listunstyled}>
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
                                        <a href='/'>Careers</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* column 2*/}
                        <div className={styles.footerColumn}>
                            <div className={styles.headtable}>
                                <h4>For Professionals</h4>
                                <ul className={styles.listunstyled}>
                                    <li><a href='/'>Privacy Policy</a></li>
                                    <li><a href='/'>Partner Welfare Policy</a></li>
                                    <li><a href='/'>Terms & conditions</a></li>
                                    <li><a href='/'>Community</a></li>
                                    <li><a href='/'>Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* column 3 */}
                        <div className={styles.footerColumn}>
                            <div className={styles.headtable}>
                                <h4>For Customers</h4>
                                <ul className={styles.listunstyled}>
                                    <li><a href='/'>Book a service</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* column 4 */}
                        <div className={styles.footerColumn}>
                            <div className={styles.headtable}>
                                <h4>Social Links</h4>
                                <ul className={styles.listunstyled}>
                                    <li>
                                        <a href='/' target='_blank'>
                                            <FacebookIcon className={styles.icons} />
                                        </a>
                                        <a href='/' target='_blank'>
                                            <InstagramIcon className={styles.icons} />
                                        </a>
                                        <a href='/' target='_blank'>
                                            <TwitterIcon className={styles.icons} />
                                        </a>
                                        <a href="/" target="_blank">
                                            <LinkedInIcon className={styles.icons} />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div >

                    <hr />

                    <div className={styles.footerBottom}>
                        <p className={styles.bottom}>
                            @copy;{new Date().getFullYear()}One Solutions Technologies India Pvt. Ltd.
                            {/* <img src={googleplay} alt='googleplay' />
                        <img src={appstore} alt="appstore" /> */}
                        </p>
                    </div>
                </div >
            </div>
        </React.Fragment >
    )
}

export default PartnersFooter;