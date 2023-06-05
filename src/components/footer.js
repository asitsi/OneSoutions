import React from 'react'
import './footer.css';
import googleplay from "../assests/images/googleplay.png";
import appstore from "../assests/images/appstore.png";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.mainfooter}><hr/>
        <div className={styles.footerContainer}>
          <div className={styles.footer}>

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

            {/* column 2*/}

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

            {/* column 3 */}

            <div className={styles.headtable}>
              <h4>For Customers</h4>
              <ul className={styles.listunstyled}>
                <li><a href='/'>Book a service</a></li>
              </ul>
            </div>
            {/* column 4 */}

            <div className={styles.headtable}>
              <h4>Social Links</h4>
              <ul className={styles.socialicons}>
                <li>
                  <a href='/' target='_blank'>
                    <FacebookIcon />
                  </a>
                  <a href='/' >
                    <InstagramIcon/>
                  </a>
                  <a href='/' target='_blank'>
                    <TwitterIcon/>
                  </a>
                  <a href="/" target="_blank"><LinkedInIcon/></a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          
          <div className={styles.copyright}>
            <p className={styles.bottom}>
              @copy;{new Date().getFullYear()}One Solutions Technologies India Pvt. Ltd.
            <img src={googleplay} alt='googleplay' />
            <img src={appstore} alt="appstore" />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
