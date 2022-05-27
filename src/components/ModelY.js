import React from 'react';
import './css/background.css';
import background from '../pics/Desktop-ModelY.jpg';

const ModelY = () => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="background"
        ></div>
    );
};

export default ModelY;
