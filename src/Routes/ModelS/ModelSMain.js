import React, { useContext } from 'react';
import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/models/modelsmain.jpg';

const ModelSMain = () => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`modelsmain modelsmain_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="introtext">
                <h1>Model S</h1>
                <p>Plaid</p>
            </div>
            <div className="background_panels">
                <div className="info_range">
                    <h1>637 km</h1>
                    <p>
                        Range <br /> (est.)
                    </p>
                </div>
                <div className="info_acceleration">
                    <h1>2.1 s</h1>
                    <p>0-100 km/h*</p>
                </div>
                <div className="info_topspeed">
                    <h1>322 km/h</h1>
                    <p>Top Speed</p>
                </div>
                <div className="info_hp">
                    <h1>1,020 hp</h1>
                    <p>Peak Power</p>
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

export default ModelSMain;
