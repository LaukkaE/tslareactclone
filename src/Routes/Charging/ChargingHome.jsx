import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/Charging/charginghome.avif';
import { ModalContext } from '../../utils/ModalContext';

const ChargingHome = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`charginghome horizontal_wrapper`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="charginghome_content horizontal_content">
                <div className="charginghome_content_text toggleable">
                    <p>Wall Connector</p>
                    <h2>Home Charging</h2>

                    <div className="charginghome_content_buttons">
                        <Button
                            mode="white"
                            size="small"
                            text="LEARN MORE"
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <div className="chargingsupercharger_content_right toggleable">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam qui sint ipsum illo dolores nostrum voluptatibus
                        maiores, consequuntur maxime quis recusandae, odit
                        porro, amet blanditiis!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChargingHome;
