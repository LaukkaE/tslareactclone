import React from 'react';
import './css/Navbar.css';
import teslaLogo from '../pics/teslalogo.svg';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Router>
                <div className="logo">
                    <Link to="/">
                        <img src={teslaLogo} alt="Tesla" />
                    </Link>
                </div>
                <div className="car_links">
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
                        <li>
                            <Link to="/support">
                                <p>Support</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">
                                <p>Account</p>
                            </Link>
                        </li>
                        <li>
                            <p>Menu</p>
                        </li>
                    </ul>
                </div>
            </Router>
        </div>
    );
};

export default Navbar;
