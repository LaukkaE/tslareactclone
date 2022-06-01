import React from 'react';
import background from '../pics/mx-homepage-desktop.jpg';
import './css/background.css';

const ModelX = ({ activeElement }) => {
    return (
        <div
            className="background modelx"
            style={{ backgroundImage: `url(${background})` }}
        >
            ModelX
        </div>
    );
};

export default ModelX;
