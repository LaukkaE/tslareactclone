import React from 'react';
import background from '../../pics/model3/model3specs.jpg';

const Model3Specs = () => {
    return (
        <div className="model3specs">
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="specs_text"></div>
        </div>
    );
};

export default Model3Specs;
