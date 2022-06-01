import React from 'react';
import background from '../pics/Desktop-SolarPanels.jpg';

const Solar = ({ active }) => {
    return (
        <div
            className="background solar"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {active && (
                <div>
                    <p>asd</p>
                    <button onClick={() => console.log(active)}>
                        sdfgsdfgdfsgdsf
                    </button>
                </div>
            )}
        </div>
    );
};

export default Solar;
