import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3specs.jpg';
import { ModalContext } from '../../utils/ModalContext';

const Model3Specs = () => {
    const setModal = useContext(ModalContext);
    const [activeButton, setActiveButton] = useState('performance');

    return (
        <div className="model3specs">
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="specs_content">
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
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                    <p>asd</p>
                </div>
            </div>
        </div>
    );
};

export default Model3Specs;
