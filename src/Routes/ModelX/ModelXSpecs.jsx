import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modelx/modelxspecs.avif';

const ModelXSpecs = () => {
    const [activeButton, setActiveButton] = useState('plaid');
    const [activeSpecs, setActiveSpecs] = useState({});

    useEffect(() => {
        if (activeButton === 'plaid') {
            setActiveSpecs({
                Range: '536 km',
                Varttimaili: '9.9s',
                Power: '1,020 hp',
                Wheels: '20" or 22"',
                Towing: '2,250 kg',
                Seating: 'Up to 6',
                Weight: '2,455 kg',
                Acceleration: `2.6 s 0-100 km/h*\n*with rollout subtracted`,
                TopSpeed: '262 km/h',
                Drag: '0.24 Cd',
                PowerTrain: 'Tri Motor',
                SuperCharging: '250 kW',
            });
        } else if (activeButton === 'modelx') {
            setActiveSpecs({
                Range: '560 km',
                Varttimaili: '-',
                Power: '670 hp',
                Wheels: '20" or 22"',
                Towing: '2,300 kg',
                Seating: 'Up to 7',
                Weight: '2,352 kg',
                Acceleration: `3.9 s 0-100 km/h`,
                TopSpeed: '250 km/h',
                Drag: '0.24 Cd',
                PowerTrain: 'Dual Motor',
                SuperCharging: '250 kW',
            });
        }
    }, [activeButton]);

    return (
        <div className="modelxspecs">
            <div className="specs_wrapper">
                <div
                    className="background"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className={`specs_content`}>
                    <div className="specs_upper_content_wrapper toggleable">
                        <h2>Model X Specs</h2>
                        <div className="specs_content_buttons">
                            <Button
                                text="Model X Plaid"
                                mode="specs"
                                size="thin"
                                onClick={() => setActiveButton('plaid')}
                                active={activeButton === 'plaid' ? true : false}
                            />
                            <Button
                                text="Model X"
                                mode="specs"
                                size="thin"
                                active={
                                    activeButton === 'modelx' ? true : false
                                }
                                onClick={() => {
                                    setActiveButton('modelx');
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
                                <p>{activeSpecs.Towing}</p>
                            </div>
                            <div className="specs_item" id="f">
                                <hr />
                                <h4>Seating</h4>
                                <p>{activeSpecs.Seating}</p>
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

export default ModelXSpecs;
