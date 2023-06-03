import React from 'react';
// css
import './navbar.css';
// images
import logo from "../assests/images/logo.png";
import flag from "../assests/images/india.png";

// css
import styles from '../styles/navbar.module.scss';


const Navbar = () => {
    return (
        <React.Fragment>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={logo} alt='logoImg' />
                    </div>
                    <div>
                        <ul className={styles.navItem}>
                            <li className="item" ><a href='/'>Book a service</a></li>
                            <li className="item"><a href='/'>About Us</a></li>
                            <li>
                                <div className="dropdown-menu" >
                                    <ul>
                                        <select name="flag" id="dropdown-content">
                                            <option value="pune">Pune</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="goa">Goa</option>
                                        </select>
                                    </ul>
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
        </React.Fragment>

    );
}

export default Navbar;
