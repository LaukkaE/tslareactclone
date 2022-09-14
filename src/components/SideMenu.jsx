import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../utils/ModalContext';

const SideMenu = ({ active, setOpenMenu }) => {
    const [moreMenu, setMoreMenu] = useState(false);
    const setModal = useContext(ModalContext);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = active ? 'hidden' : 'auto';
    }, [active]);

    return (
        <div className="sidemenu">
            <div className={`${active ? 'menu open' : 'menu'}`}>
                <button
                    className="close_button"
                    onClick={() => {
                        setOpenMenu(false);
                        setMoreMenu(false);
                    }}
                ></button>
                <ul>
                    {!moreMenu ? (
                        <>
                            {' '}
                            <li className="sidemenu_mobile">
                                <Link to="/models">
                                    <p>Model S</p>
                                </Link>
                            </li>
                            <li className="sidemenu_mobile">
                                <Link to="/model3">
                                    <p>Model 3</p>
                                </Link>
                            </li>
                            <li className="sidemenu_mobile">
                                <Link to="/modelx">
                                    <p>Model X</p>
                                </Link>
                            </li>
                            <li className="sidemenu_mobile">
                                <Link to="/modely">
                                    <p>Model Y</p>
                                </Link>
                            </li>
                            <li
                                className="sidemenu_mobile"
                                onClick={() => setModal(true)}
                            >
                                {/* <Link to="/energy"> */}
                                <p>Powerwall</p>
                                {/* </Link> */}
                            </li>
                            <li
                                className="sidemenu_mobile_hide"
                                onClick={() => setModal(true)}
                            >
                                {/* <Link to="/roadster"> */}
                                <p>Roadster</p>
                                {/* </Link> */}
                            </li>
                            <li onClick={() => setModal(true)}>
                                {/* <Link to="/commercial"> */}
                                <p>Commercial Energy</p>
                                {/* </Link> */}
                            </li>
                            <li onClick={() => setModal(true)}>
                                {/* <Link to="/utilities"> */}
                                <p>Utilities</p>
                                {/* </Link> */}
                            </li>
                            <li className="sidemenu_mobile">
                                <Link to="/charging">
                                    <p>Charging</p>
                                </Link>
                            </li>
                            <li onClick={() => setModal(true)}>
                                {/* <Link to="/energy"> */}
                                <p>Energy</p>
                                {/* </Link> */}
                            </li>
                            <li onClick={() => setModal(true)}>
                                {/* <Link to="/findus"> */}
                                <p>Find Us</p>
                                {/* </Link> */}
                            </li>
                            <li onClick={() => setModal(true)}>
                                {/* <Link to="/support"> */}
                                <p>Support</p>
                                {/* </Link> */}
                            </li>
                            <li onClick={() => setModal(true)}>
                                {/* <Link to="/ir"> */}
                                <p>Investor Relations</p>
                                {/* </Link> */}
                            </li>
                            <li
                                className="sidemenu_mobile"
                                onClick={() => setModal(true)}
                            >
                                <p>Account</p>
                            </li>
                            <li
                                className="sidemenu_mobile"
                                onClick={() => setMoreMenu(true)}
                            >
                                <p>
                                    More{' '}
                                    <FontAwesomeIcon
                                        className="angle_right_icon"
                                        icon={faAngleRight}
                                    />
                                </p>
                            </li>{' '}
                        </>
                    ) : (
                        <>
                            <li
                                className="back_button"
                                onClick={() => setMoreMenu(false)}
                            >
                                <FontAwesomeIcon
                                    className="angle_left_icon"
                                    icon={faAngleLeft}
                                />
                                <p>Back</p>
                            </li>
                            <li className="sidemenu_mobile">
                                <p>Cybertruck</p>
                            </li>
                            <li className="sidemenu_mobile">
                                <p>Roadster</p>
                            </li>
                            <li className="sidemenu_mobile">
                                <p>Semi</p>
                            </li>
                            <li className="sidemenu_mobile">
                                <p>News</p>
                            </li>
                        </>
                    )}

                    <li className="language_button">
                        <FontAwesomeIcon
                            className="globe_icon"
                            icon={faGlobe}
                        />
                        <p>Other Europe</p>
                        <p className="english">English</p>
                    </li>
                </ul>
            </div>
            {active && (
                <div
                    className="blur_effect"
                    onClick={() => {
                        setOpenMenu(false);
                        setMoreMenu(false);
                    }}
                ></div>
            )}
        </div>
    );
};

export default SideMenu;
