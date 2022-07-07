import React from 'react';
import background from '../../pics/model3/model3order.jpg';

const Model3Order = () => {
    return (
        <div className="model3order">
            <div className="order_text"></div>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
        </div>
    );
};

export default Model3Order;
