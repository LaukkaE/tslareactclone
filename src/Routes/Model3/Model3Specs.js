import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3specs.jpg';
import { ModalContext } from '../../utils/ModalContext';

const Model3Specs = () => {
    const setModal = useContext(ModalContext);
    const [activeButton, setActiveButton] = useState('performance');
    const [activeSpecs, setActiveSpecs] = useState({});

    useEffect(() => {
        if (activeButton === 'performance') {
            setActiveSpecs({
                Battery: 'Long Range',
                Acceleration: `3.3s 0-100 km/h*\n*with rollout subtracted`,
                Range: '547 km',
                Drive: 'Dual Motor All-Wheel Drive',
                Seating: '5 Adults',
                Wheels: '20"',
                Weight: '1,836 kg',
                Cargo: '649 liters',
                Displays: '15" Center Touchscreen',
                SuperCharging: 'Pay Per Use',
                Warranty: '192,000 km',
            });
        } else if (activeButton === 'realwheeldrive') {
            setActiveSpecs({
                Battery: 'Standard Range',
                Acceleration: '6.1s 0-100 km/h',
                Range: '491 km',
                Drive: 'Rear-Wheel Drive',
                Seating: '5 Adults',
                Wheels: '18" or 19"',
                Weight: '1,752 kg',
                Cargo: '649 liters',
                Displays: '15" Center Touchscreen',
                SuperCharging: 'Pay Per Use',
                Warranty: '160,000 km',
            });
        } else if (activeButton === 'longrange') {
            setActiveSpecs({
                Battery: 'Long Range',
                Acceleration: '4,4s 0-100 km/h',
                Range: '602 km',
                Drive: 'Dual Motor All-Wheel Drive',
                Seating: '5 Adults',
                Wheels: '18" or 19"',
                Weight: '1,830 kg',
                Cargo: '649 liters',
                Displays: '15" Center Touchscreen',
                SuperCharging: 'Pay Per Use',
                Warranty: '192,000 km',
            });
        }
    }, [activeButton]);

    return (
        <div className="model3specs">
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className={`specs_content toggleable`}>
                <h2>Model 3 Specs</h2>
                <div className="specs_content_buttons">
                    <Button
                        text="Performance"
                        mode="specs"
                        size="thin"
                        onClick={() => setActiveButton('performance')}
                        active={activeButton === 'performance' ? true : false}
                    />
                    <Button
                        text="Long Range"
                        mode="specs"
                        size="thin"
                        active={activeButton === 'longrange' ? true : false}
                        onClick={() => {
                            setActiveButton('longrange');
                            // setModal(true);
                        }}
                    />
                    <Button
                        text="Rear-Wheel Drive"
                        mode="specs"
                        size="thin"
                        onClick={() => setActiveButton('realwheeldrive')}
                        active={
                            activeButton === 'realwheeldrive' ? true : false
                        }

                        // onClick={() => setModal(true)}
                    />
                    <Button
                        text="Compare"
                        mode="white"
                        size="thin"
                        onClick={() => setModal(true)}
                    />
                </div>
                <div className="specs_content_items">
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
                        <h4>Range (WLTP)</h4>
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
                        <h4>Cargo</h4>
                        <p>{activeSpecs.Cargo}</p>
                    </div>
                    <div className="specs_displays" id="i">
                        <hr />
                        <h4>Displays</h4>
                        <p>{activeSpecs.Displays}</p>
                    </div>
                    <div className="specs_supercharging" id="j">
                        <hr />
                        <h4>Supercharging</h4>
                        <p>{activeSpecs.SuperCharging}</p>
                    </div>
                    <div className="specs_warranty" id="k">
                        <hr />
                        <h4>Warranty</h4>
                        <p>
                            {`Basic Vehicle - 4 years or 80,000 km, whichever comes first
Battery & Drive Unit - 8 years or ${activeSpecs.Warranty}, whichever comes first`}
                        </p>
                    </div>
                </div>
                <div className="specs_content_expand">
                    <Button
                        mode="transparent"
                        size="round"
                        text={<>{<FontAwesomeIcon icon={faPlus} />}</>}
                        onClick={() => setModal(true)}
                    ></Button>
                    <p>EXPAND LIST</p>
                </div>
            </div>
        </div>
    );
};

export default Model3Specs;
