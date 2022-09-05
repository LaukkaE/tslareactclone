import React, { useContext } from 'react';
import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/modelx/modelxmain.avif';

const ModelXMain = () => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`modelxmain modelxmain_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="introtext toggleable">
                <h1>Model X</h1>
                <p>Plaid</p>
            </div>
            <div className="background_panels">
                <div className="background_panels_1 toggleable">
                    <h1>536 km</h1>
                    <p>
                        Range <br /> (est.)
                    </p>
                </div>
                <div className="background_panels_2 toggleable">
                    <h1>2.6 s</h1>
                    <p>0-100 km/h*</p>
                </div>
                <div className="background_panels_3 toggleable">
                    <h1>9.9s</h1>
                    <p>1/4 Mile</p>
                </div>
                <div className="background_panels_4 toggleable">
                    <h1>1,020 hp</h1>
                    <p>Peak Power</p>
                </div>
                <div className="background_panels_5 toggleable">
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
