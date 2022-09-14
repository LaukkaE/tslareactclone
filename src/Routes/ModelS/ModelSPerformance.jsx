import React, { useContext } from 'react';
import background from '../../pics/models/modelsperformance.avif';

import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';

const ModelSPerformance = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`modelsperformance horizontal_wrapper`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">1,020 hp</div>
                        <div className="background_panels_text">Peak Power</div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">9.23 s</div>
                        <div className="background_panels_text">
                            @250 km/h 1/4 mile
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">2.1s</div>
                        <div className="background_panels_text">
                            0-100 km/h*
                        </div>
                    </div>
                </div>
            </div>
            <div className="performance_content horizontal_content toggleable">
                <div className="performance_content_left">
                    <div className="performance_content_left_text">
                        <p>Plaid</p>
                        <h2>Beyond Ludicrous</h2>
                    </div>
                    <div className="performance_content_left_buttons">
                        <Button
                            mode="white"
                            size="small"
                            text="ORDER NOW"
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <div className="performance_content_right">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni consequatur asperiores itaque, et alias a.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModelSPerformance;
