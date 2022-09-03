import React, { useContext } from 'react';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/Charging/chargingsupercharger.jpg';
import Button from '../../components/Button';

const ChargingSuperCharger = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`chargingsupercharger vertical_wrapper_right`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="chargingsupercharger_content vertical_content">
                <div className="chargingsupercharger_content_text toggleable">
                    <p>Supercharger</p>
                    <h2>Freedom To Travel</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Facere corporis non dolorum, blanditiis quo
                        quisquam necessitatibus veritatis officiis consequatur.
                        Beatae blanditiis maiores dolores tempora repellat quos
                        voluptas voluptates laudantium! Maiores nostrum adipisci
                        distinctio iusto inventore.
                    </p>
                </div>
                <div className="chargingsupercharger_content_buttons toggleable">
                    <Button
                        mode="white"
                        size="stretch"
                        text="PLAN MY TRIP"
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
        </div>
    );
};

export default ChargingSuperCharger;
