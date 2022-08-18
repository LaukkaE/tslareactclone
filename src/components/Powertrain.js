import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css/Powertrain.css';
import models from '../pics/powertrain/models.jpg';
import modelsplaid from '../pics/powertrain/modelsplaid.jpg';

const Powertrain = (model = models) => {
    const [activeSide, setActiveSide] = useState('left');
    const [selectedCar, setSelectedCar] = useState({
        left: {
            name: 'Model S',
            text: 'Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.',
            acceleration: '3.2 s',
            range: '652 km',
            image: models,
        },
        right: {
            name: 'Model S Plaid',
            text: 'Maintain 1,000+ horsepower all the way to 322 km/h with Tri-Motor All-Wheel drive, featuring torque vecotring and three independent carbon sleeved rotors',
            acceleration: '2.1 s',
            range: '637 km',
            image: modelsplaid,
        },
    });

    useEffect(() => {
        let timer = setInterval(() => {
            if (activeSide === 'left') {
                setActiveSide('right');
            } else {
                setActiveSide('left');
            }
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeSide]);

    // const dataModelS = {
    //     left: {
    //         name: 'Model S',
    //         text: 'Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.',
    //         acceleration: '3.2 s',
    //         range: '652 km',
    //     },
    //     right: {
    //         name: 'Model S Plaid',
    //         text: 'Maintain 1,000+ horsepower all the way to 322 km/h with Tri-Motor All-Wheel drive, featuring torque vecotring and three independent carbon sleeved rotors',
    //         acceleration: '2.1 s',
    //         range: '637 km',
    //     },
    // };
    return (
        <div className="powertrain">
            <div className="upper_text">
                <h1>Electric Powertrain</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, ipsum quibusdam molestiae eveniet dolor sapiente
                    alias soluta placeat corporis magnam, aliquid fugit.
                    Laboriosam, soluta officia!
                </p>
            </div>
            <div className="image_container">
                <img
                    src={
                        activeSide === 'left'
                            ? selectedCar.left.image
                            : selectedCar.right.image
                    }
                    alt=""
                />
            </div>
            <div className="powertrain_content">
                <div
                    className={`${
                        activeSide === 'left'
                            ? 'powertrain_content_box_selected'
                            : 'powertrain_content_box'
                    }`}
                    onClick={() => setActiveSide('left')}
                >
                    <div className="powertrain_content_box_text">
                        <h3>{selectedCar.left.name}</h3>
                        <p>{selectedCar.left.text}</p>
                    </div>
                    <div className="powertrain_content_box_specs">
                        <div className="powertrain_content_box_specs_acceleration">
                            <h2>{selectedCar.left.acceleration}</h2>
                            <p>0-100 km/h</p>
                        </div>
                        <div className="powertrain_content_box_specs_range">
                            <h2>{selectedCar.left.range}</h2>
                            <p>Range (est.)</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        activeSide === 'right'
                            ? 'powertrain_content_box_selected'
                            : 'powertrain_content_box'
                    }`}
                    onClick={() => setActiveSide('right')}
                >
                    <div className="powertrain_content_box_text">
                        <h3>{selectedCar.right.name}</h3>
                        <p>{selectedCar.right.text}</p>
                    </div>
                    <div className="powertrain_content_box_specs">
                        <div className="powertrain_content_box_specs_acceleration">
                            <h2>{selectedCar.right.acceleration}</h2>
                            <p>0-100 km/h</p>
                        </div>
                        <div className="powertrain_content_box_specs_range">
                            <h2>{selectedCar.right.range}</h2>
                            <p>Range (est.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Powertrain;
