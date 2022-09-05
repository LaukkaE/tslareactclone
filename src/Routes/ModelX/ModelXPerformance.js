import React, { useContext } from 'react';
import background from '../../pics/modelx/modelxperformance.avif';

import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';

const ModelXPerformance = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`modelxperformance horizontal_wrapper`}>
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
                        <div className="background_panels_info">9.9 s</div>
                        <div className="background_panels_text">1/4 mile</div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">2.6s</div>
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quaerat suscipit maiores dicta asperiores ea nulla
                        sunt aliquid, alias culpa molestias?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModelXPerformance;
