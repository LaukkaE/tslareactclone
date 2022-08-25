import React, { useContext } from 'react';
import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/modelx/modelxmain.jpg';

const ModelXMain = () => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`modelxmain modelxmain_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="introtext">
                <h1>Model X</h1>
                <p>Plaid</p>
            </div>
            <div className="background_panels">
                <div className="info_range">
                    <h1>536 km</h1>
                    <p>
                        Range <br /> (est.)
                    </p>
                </div>
                <div className="info_acceleration">
                    <h1>2.6 s</h1>
                    <p>0-100 km/h*</p>
                </div>
                <div className="info_topspeed">
                    <h1>9.9s</h1>
                    <p>1/4 Mile</p>
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

export default ModelXMain;
