import React, { useContext } from 'react';
import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/modely/modelymain.jpg';

const ModelYMain = () => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`modelymain modelymain_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <p className="introtext">Model Y</p>
            <div className="background_panels">
                <div className="info_cargo">
                    <h1>2,100 +</h1>
                    <p>Litres of Cargo</p>
                </div>
                <div className="info_range">
                    <h1>533 km</h1>
                    <p>Range (WLTP)</p>
                </div>
                <div className="info_awd">
                    <h1>AWD</h1>
                    <p>Dual Motor</p>
                </div>
                <div className="info_button">
                    <Button
                        text="ORDER NOW"
                        mode="transparent"
                        size="small"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModelYMain;
