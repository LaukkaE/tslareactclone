import React from 'react';
import background from '../pics/desktop_model_3_v2.jpg';
import './css/background.css';

const Model3 = () => {
    return (
        <div
            className="background model3"
            style={{ backgroundImage: `url(${background})` }}
        >
            Model3
        </div>
    );
};

export default Model3;
