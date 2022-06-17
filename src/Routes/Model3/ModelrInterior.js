import React from 'react';
import background from '../../pics/model3/model3interior.jpg';

const Model3Interior = () => {
    return (
        <div
            className="model3interior background"
            style={{ backgroundImage: `url(${background})` }}
        >
            Model3Main
        </div>
    );
};

export default Model3Interior;
