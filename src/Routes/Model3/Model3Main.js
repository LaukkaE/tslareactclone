import React from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/Model3Main.jpg';

const Model3Main = ({ active }) => {
    return (
        <div
            className={`model3main model3main_background background ${
                active ? 'model3main_active' : ''
            }`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <p className="introtext">Model 3</p>
            <div className="background_panels">
                <div className="info_acceleration">
                    <h1>3.3 s</h1>
                    <p>0-100 km/h</p>
                </div>
                <div className="info_range">
                    <h1>602km</h1>
                    <p>Range (WLTP)</p>
                </div>
                <div className="info_awd">
                    <h1>AWD</h1>
                    <p>Dual Motor</p>
                </div>
                <div className="info_button">
                    <Button text="ORDER NOW" mode="transparent" size="small" />
                </div>
            </div>
        </div>
    );
};

export default Model3Main;
