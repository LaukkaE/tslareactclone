import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/models/modelsspecs.avif';

const ModelSSpecs = () => {
    const [activeButton, setActiveButton] = useState('plaid');
    const [activeSpecs, setActiveSpecs] = useState({});

    useEffect(() => {
        if (activeButton === 'plaid') {
            setActiveSpecs({
                Range: '637 km',
                Varttimaili: '9.23@250 km/h trap speed',
                Power: '1,020 hp',
                Wheels: '19" or 21"',
                Cargo: '793 liters',
                Weight: '2,162 kg',
                Acceleration: `2.1 s 0-100 km/h*\n*with rollout subtracted`,
                TopSpeed:
                    '322 km/h*\n*when equipped with paid*\n*hardware upgrades',
                Drag: '0.208 Cd',
                PowerTrain: 'Tri Motor',
                SuperCharging: '250 kW',
            });
        } else if (activeButton === 'models') {
            setActiveSpecs({
                Range: '652 km',
                Varttimaili: '-',
                Power: '670 hp',
                Wheels: '19" or 21"',
                Cargo: '793 liters',
                Weight: '2,162 kg',
                Acceleration: `3.2 s 0-100 km/h`,
                TopSpeed: '250 km/h',
                Drag: '0.208 Cd',
                PowerTrain: 'Dual Motor',
                SuperCharging: '250 kW',
            });
        }
    }, [activeButton]);

    return (
        <div className="modelsspecs">
            <div className="specs_wrapper">
                <div
                    className="background"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className={`specs_content`}>
                    <div className="specs_upper_content_wrapper toggleable">
                        <h2>Model S Specs</h2>
                        <div className="specs_content_buttons">
                            <Button
                                text="Model S Plaid"
                                mode="specs"
                                size="thin"
                                onClick={() => setActiveButton('plaid')}
                                active={activeButton === 'plaid' ? true : false}
                            />
                            <Button
                                text="Model S"
                                mode="specs"
                                size="thin"
                                active={
                                    activeButton === 'models' ? true : false
                                }
                                onClick={() => {
                                    setActiveButton('models');
                                    // setModal(true);
                                }}
                            />
                        </div>
                        <div className="specs_content_items toggleable">
                            <div className="specs_item" id="a">
                                <hr />
                                <h4>Range (est.)</h4>
                                <p>{activeSpecs.Range}</p>
                            </div>
                            <div className="specs_item" id="b">
                                <hr />
                                <h4>1/4 Mile</h4>
                                <p>{activeSpecs.Varttimaili}</p>
                            </div>
                            <div className="specs_item" id="c">
                                <hr />
                                <h4>Peak Power</h4>
                                <p>{activeSpecs.Power}</p>
                            </div>
                            <div className="specs_item" id="d">
                                <hr />
                                <h4>Wheels</h4>
                                <p>{activeSpecs.Wheels}</p>
                            </div>
                            <div className="specs_item" id="e">
                                <hr />
                                <h4>Cargo</h4>
                                <p>{activeSpecs.Cargo}</p>
                            </div>
                            <div className="specs_item" id="f">
                                <hr />
                                <h4>Weight</h4>
                                <p>{activeSpecs.Weight}</p>
                            </div>
                            <div className="specs_item" id="g">
                                <hr />
                                <h4>Acceleration</h4>
                                <p>{activeSpecs.Acceleration}</p>
                            </div>
                            <div className="specs_item" id="h">
                                <hr />
                                <h4>Top Speed</h4>
                                <p>{activeSpecs.TopSpeed}</p>
                            </div>
                            <div className="specs_item" id="i">
                                <hr />
                                <h4>Drag Coefficient</h4>
                                <p>{activeSpecs.Drag}</p>
                            </div>
                            <div className="specs_items" id="j">
                                <hr />
                                <h4>Powertrain</h4>
                                <p>{activeSpecs.PowerTrain}</p>
                            </div>
                            <div className="specs_item" id="k">
                                <hr />
                                <h4>Supercharging Max</h4>
                                <p>{activeSpecs.SuperCharging}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelSSpecs;
