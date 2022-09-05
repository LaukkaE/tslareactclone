import React, { useContext } from 'react';
import { ModalContext } from '../../../utils/ModalContext';
import background from '../../../pics/Charging/chargingdestination.avif';
import Button from '../../../components/Button';

const ChargingDestinationMobile = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`chargingdestination horizontal_wrapper`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="chargingdestination_content horizontal_content">
                <div className="chargingdestination_content_text toggleable">
                    <p>Destination Charging</p>
                    <h2>{`Power at Your\nDestination`}</h2>
                    <div className="chargingdestination_content_buttons toggleable">
                        <Button
                            mode="white"
                            size="small"
                            text="FIND US"
                            onClick={() => setModal(true)}
                        />
                        <Button
                            mode="white"
                            size="small"
                            text="LEARN MORE"
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <div className="chargingdestination_content_right">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis sapiente est, corrupti velit error
                        inventore consectetur itaque dolorem, ullam ratione,
                        expedita labore dolores sunt. Fugiat dolor ipsum enim?
                        Quos, natus!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChargingDestinationMobile;
