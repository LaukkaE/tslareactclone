import React, { useContext } from 'react';
import { ModalContext } from '../utils/ModalContext';
import '../css/Footer.css';

const Footer = ({ color = '#f8f8f8' }) => {
    const setModal = useContext(ModalContext);

    return (
        <div className="footer" style={{ color: `${color}` }}>
            <ul>
                <li onClick={() => setModal(true)}>
                    <p>Tesla 2022</p>
                </li>
                <li onClick={() => setModal(true)}>
                    <p>Privacy & Legal</p>
                </li>
                <li onClick={() => setModal(true)}>
                    <p>Contact</p>
                </li>
                <li onClick={() => setModal(true)}>
                    <p>Careers</p>
                </li>
                <li onClick={() => setModal(true)}>
                    <p>News</p>
                </li>
                <li onClick={() => setModal(true)}>
                    <p>Locations</p>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
