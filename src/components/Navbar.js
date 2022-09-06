import React, { useContext, useEffect, useState } from 'react';
import '../css/Navbar.css';
import teslaLogo from '../pics/teslalogo.svg';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import SideMenu from './SideMenu';
import { ModalContext } from '../utils/ModalContext';

const Navbar = ({ color = 'black', mode = 'fixed' }) => {
    const setModal = useContext(ModalContext);
    const [openMenu, setOpenMenu] = useState(false);

    // useEffect to create movable hover shadow
    useEffect(() => {
        const hoverElement = document.querySelector('.hover_overlay');
        const elements = document.querySelectorAll('.hoverable');

        const enterListener = (element) => {
            let pos = element.getBoundingClientRect();
            hoverElement.classList.add('hovered');
            hoverElement.style.left = `${pos.x}px`;
            hoverElement.style.top = `${pos.y}px`;
            hoverElement.style.height = `${pos.height}px`;
            hoverElement.style.width = `${pos.width}px`;
        };
        const exitListener = () => {
            hoverElement.classList.remove('hovered');
        };

        elements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                enterListener(element);
            });
            element.addEventListener('mouseleave', () => {
                exitListener();
            });
        });
        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseenter', enterListener);
                element.removeEventListener('mouseleave', exitListener);
            });
        };
    }, []);

    return (
        <div className="navbar_container">
            {/* <Router> */}
            <div className={`navbar color_${color} mode_${mode}`}>
                <div className="hover_overlay" />
                <div className="logo">
                    <Link to="/">
                        <img src={teslaLogo} alt="Tesla" />
                    </Link>
                </div>
                <div className="car_links hideable">
                    <ul>
                        <li className="hoverable">
                            <Link to="/models">
                                <p>Model S</p>
                            </Link>
                        </li>
                        <li className="hoverable">
                            <Link to="/model3">
                                <p>Model 3</p>
                            </Link>
                        </li>
                        <li className="hoverable">
                            <Link to="/modelx">
                                <p>Model X</p>
                            </Link>
                        </li>
                        <li className="hoverable">
                            <Link to="/modely">
                                <p>Model Y</p>
                            </Link>
                        </li>
                        <li className="hoverable">
                            <Link to="/charging">
                                <p>Charging</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="support_links">
                    <ul>
                        <li
                            className="hideable hoverable"
                            onClick={() => setModal(true)}
                        >
                            {/* <Link to="/support"> */}
                            <p>Support</p>
                            {/* </Link> */}
                        </li>
                        <li
                            className="hideable hoverable"
                            onClick={() => setModal(true)}
                        >
                            {/* <Link to="/account"> */}
                            <p>Account</p>
                            {/* </Link> */}
                        </li>
                        <li className="hoverable">
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
