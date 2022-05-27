import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">logo</div>
            <div className="car_links">
                <ul>
                    <li>
                        <p>Model S</p>
                    </li>
                    <li>
                        <p>Model 3</p>
                    </li>
                    <li>
                        <p>Model X</p>
                    </li>
                    <li>
                        <p>Model Y</p>
                    </li>
                    <li>
                        <p>Charging</p>
                    </li>
                </ul>
            </div>
            <div className="support_links">
                <ul>
                    <li>
                        <p>Support</p>
                    </li>
                    <li>
                        <p>Account</p>
                    </li>
                    <li>
                        <p>Menu</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
