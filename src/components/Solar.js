import React from 'react';
import background from '../pics/Desktop-SolarPanels.jpg';

const Solar = () => {
    return (
        <div
            className="background solar"
            style={{ backgroundImage: `url(${background})` }}
        >
            Solar
        </div>
    );
};

export default Solar;
