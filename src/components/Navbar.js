import React, { useState } from 'react';
import '../css/Navbar.css';
import teslaLogo from '../pics/teslalogo.svg';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import SideMenu from './SideMenu';

const Navbar = ({ color = 'black', mode = 'fixed' }) => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="navbar_container">
            {/* <Router> */}
            <div className={`navbar color_${color} mode_${mode}`}>
                <div className="logo">
                    <Link to="/">
                        <img
                            src={teslaLogo}
                            // style={{ fill: color }}
                            alt="Tesla"
                        />
                    </Link>
                </div>
                <div className="car_links hideable">
                    <ul>
                        <li>
                            <Link to="/models">
                                <p>Model S</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/model3">
                                <p>Model 3</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/modelx">
                                <p>Model X</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/modely">
                                <p>Model Y</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/charging">
                                <p>Charging</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="support_links">
                    <ul>
                        <li className="hideable">
                            <Link to="/support">
                                <p>Support</p>
                            </Link>
                        </li>
                        <li className="hideable">
                            <Link to="/account">
                                <p>Account</p>
                            </Link>
                        </li>
                        <li>
                            <p
                                className="menu_button"
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                Menu
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <SideMenu active={openMenu} setOpenMenu={setOpenMenu} />
            {/* </Router> */}
        </div>
    );
};

export default Navbar;
