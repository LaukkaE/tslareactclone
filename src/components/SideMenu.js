import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ active, setOpenMenu }) => {
    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = active ? 'hidden' : 'auto';
    }, [active]);

    return (
        <div className="sidemenu">
            <div className={`${active ? 'menu open' : 'menu'}`}>
                <button
                    className="close_button"
                    onClick={() => setOpenMenu(false)}
                >
                    X
                </button>
                <ul>
                    <li>
                        <Link to="/roadster">
                            <p>Roadster</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/commercial">
                            <p>Commercial Energy</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/utilities">
                            <p>Utilities</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/energy">
                            <p>Energy</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/findus">
                            <p>Find Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/support">
                            <p>Support</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ir">
                            <p>Investor Relations</p>
                        </Link>
                    </li>
                    <li>
                        <p>Other Europe</p>
                        <p>English</p>
                    </li>
                </ul>
            </div>
            {active && (
                <div
                    className="blur_effect"
                    onClick={() => setOpenMenu(false)}
                ></div>
            )}
        </div>
    );
};

export default SideMenu;
