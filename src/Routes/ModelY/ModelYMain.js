import React, { useContext } from 'react';
import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';
import background from '../../pics/modely/modelymain.avif';

const ModelYMain = () => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`modelymain modelymain_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <p className="introtext toggleable">Model Y</p>
            <div className="background_panels">
                <div className="background_panels_1 toggleable">
                    <h1>2,100 +</h1>
                    <p>Litres of Cargo</p>
                </div>
                <div className="background_panels_2 toggleable">
                    <h1>533 km</h1>
                    <p>Range (WLTP)</p>
                </div>
                <div className="background_panels_3 toggleable">
                    <h1>AWD</h1>
                    <p>Dual Motor</p>
                </div>
                <div className="background_panels_4 toggleable">
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
