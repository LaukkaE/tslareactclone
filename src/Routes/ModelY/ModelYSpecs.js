import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3specs.avif';
import { ModalContext } from '../../utils/ModalContext';

const ModelYSpecs = () => {
    const setModal = useContext(ModalContext);
    const [activeButton, setActiveButton] = useState('performance');
    const [activeSpecs, setActiveSpecs] = useState({});

    useEffect(() => {
        if (activeButton === 'performance') {
            setActiveSpecs({
                Battery: 'Long Range',
                Acceleration: `3.3s 0-100 km/h*\n*with rollout subtracted`,
                Range: '514 kilometers (WLTP)',
                Drive: 'Dual Motor All-Wheel Drive',
                Seating: '5 Adults',
                Wheels: '21"',
                Weight: '1,995 kg',
                Cargo: '2,158 liters',
                TopSpeed: '250 km/h',
                Displays: '15" Center Touchscreen',
                SuperCharging: 'Pay Per Use',
            });
        } else if (activeButton === 'longrange') {
            setActiveSpecs({
                Battery: 'Long Range',
                Acceleration: '5,0s 0-100 km/h',
                Range: '533 kilometers (WLTP)',
                Drive: 'Dual Motor All-Wheel Drive',
                Seating: '5 Adults',
                Wheels: '19" or 20"',
                Weight: '1,979 kg',
                Cargo: '2,158 liters',
                TopSpeed: '217 km/h',
                Displays: '15" Center Touchscreen',
                SuperCharging: 'Pay Per Use',
            });
        }
    }, [activeButton]);

    return (
        <div className="modelyspecs">
            <div className="specs_wrapper">
                <div
                    className="background"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className={`specs_content`}>
                    <div className="specs_upper_content_wrapper toggleable">
                        <h2>Model Y Specs</h2>
                        <div className="specs_content_buttons">
                            <Button
                                text="Performance"
                                mode="specs"
                                size="thin"
                                onClick={() => setActiveButton('performance')}
                                active={
                                    activeButton === 'performance'
                                        ? true
                                        : false
                                }
                            />
                            <Button
                                text="Long Range AWD"
                                mode="specs"
                                size="thin"
                                active={
                                    activeButton === 'longrange' ? true : false
                                }
                                onClick={() => {
                                    setActiveButton('longrange');
                                    // setModal(true);
                                }}
                            />
                        </div>
                        <div className="specs_content_items toggleable">
                            <div className="specs_battery" id="a">
                                <hr />
                                <h4>Battery</h4>
                                <p>{activeSpecs.Battery}</p>
                            </div>
                            <div className="specs_acceleration" id="b">
                                <hr />
                                <h4>Acceleration</h4>
                                <p>{activeSpecs.Acceleration}</p>
                            </div>
                            <div className="specs_range" id="c">
                                <hr />
                                <h4>Range</h4>
                                <p>{activeSpecs.Range}</p>
                            </div>
                            <div className="specs_drive" id="d">
                                <hr />
                                <h4>Drive</h4>
                                <p>{activeSpecs.Drive}</p>
                            </div>
                            <div className="specs_seating" id="e">
                                <hr />
                                <h4>Seating</h4>
                                <p>{activeSpecs.Seating}</p>
                            </div>
                            <div className="specs_wheels" id="f">
                                <hr />
                                <h4>Wheels</h4>
                                <p>{activeSpecs.Wheels}</p>
                            </div>
                            <div className="specs_weight" id="g">
                                <hr />
                                <h4>Weight</h4>
                                <p>{activeSpecs.Weight}</p>
                            </div>
                            <div className="specs_cargo" id="h">
                                <hr />
                                <h4>Max Cargo Volume</h4>
                                <p>{activeSpecs.Cargo}</p>
                            </div>
                            <div className="specs_displays" id="i">
                                <hr />
                                <h4>Top Speed</h4>
                                <p>{activeSpecs.TopSpeed}</p>
                            </div>
                            <div className="specs_displays" id="j">
                                <hr />
                                <h4>Displays</h4>
                                <p>{activeSpecs.Displays}</p>
                            </div>
                            <div className="specs_supercharging" id="k">
                                <hr />
                                <h4>Supercharging</h4>
                                <p>{activeSpecs.SuperCharging}</p>
                            </div>
                        </div>
                    </div>
                    <div className="specs_additional_content toggleable">
                        <h3>Premium Interior</h3>
                        <p>Heated front and rear seats</p>
                        <p>2nd row seats that fold flat</p>
                        <p>
                            Premium audio – 13 speakers, 1 subwoofer, 2 amps and
                            <br />
                            immersive sound
                        </p>
                        <p>Premium Connectivity (30 days included)</p>
                        <p>LED fog lamps</p>
                        <p>
                            Tinted glass roof with ultraviolet and infrared
                            protection
                        </p>
                        <p>Power folding, heated side mirrors</p>
                        <p>Music and media over Bluetooth®</p>
                        <p>Custom driver profiles</p>
                        <p>HEPA air filtration system</p>
                        <p>
                            Center console with storage, 4 USB ports and docking
                            for 2 <br />
                            smartphones
                        </p>
                    </div>
                </div>
            </div>
            <div className="specs_order_content toggleable">
                <Button
                    text="ORDER NOW"
                    mode="transparent"
                    size="small"
                    onClick={() => setModal(true)}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati quam neque at nihil, fugiat tenetur culpa
                    veritatis recusandae, dignissimos aspernatur suscipit
                    laboriosam quidem corporis atque.
                </p>
            </div>
        </div>
    );
};

export default ModelYSpecs;
