import React, { useContext } from 'react';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/Charging/chargingdestination.avif';
import Button from '../../components/Button';

const ChargingDestination = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`chargingdestination vertical_wrapper_left`}>
            <div className="chargingdestination_content vertical_content">
                <div className="chargingdestination_content_text toggleable">
                    <p>Destination Charging</p>
                    <h2>Power at Your Destination</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis sapiente est, corrupti velit error
                        inventore consectetur itaque dolorem, ullam ratione,
                        expedita labore dolores sunt. Fugiat dolor ipsum enim?
                        Quos, natus!
                    </p>
                </div>
                <div className="chargingdestination_content_buttons toggleable">
                    <Button
                        mode="white"
                        size="stretch"
                        text="FIND US"
                        onClick={() => setModal(true)}
                    />
                    <Button
                        mode="white"
                        size="stretch"
                        text="LEARN MORE"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
        </div>
    );
};

export default ChargingDestination;
