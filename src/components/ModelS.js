import React from 'react';
import background from '../pics/ms-homepage-desktop.jpg';
import './css/background.css';

const ModelS = ({ active }) => {
    return (
        <div
            className="background models"
            style={{ backgroundImage: `url(${background})` }}
        >
            ModelS
        </div>
    );
};

export default ModelS;
