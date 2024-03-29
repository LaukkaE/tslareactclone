import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Button from './Button';
import background from '../../src/pics/autopilot/autopilot.avif';
import { ModalContext } from '../utils/ModalContext';
import '../css/Autopilot.css';

const Autopilot = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`autopilot horizontal_wrapper`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">360°</div>
                        <div className="background_panels_text">
                            Rear, side and forward-facing cameras provide
                            maximum visibility
                        </div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">250 m</div>
                        <div className="background_panels_text">
                            Powerful visual processing at up to 250 meters of
                            range
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">
                            {' '}
                            {<>{<FontAwesomeIcon icon={faCamera} />}</>}
                        </div>
                        <div className="background_panels_text">
                            Tesla Vision detects nearby cars, helps prevent
                            potential collisions and assists with parking
                        </div>
                    </div>
                </div>
            </div>
            <div className="autopilot_content toggleable">
                <div className="autopilot_content_left">
                    <p>Autopilot</p>
                    <h2>Future of Driving</h2>
                    <div className="autopilot_content_left_buttons">
                        <Button
                            mode="white"
                            size="round"
                            text={<>{<FontAwesomeIcon icon={faPlus} />}</>}
                            onClick={() => setModal(true)}
                        ></Button>
                        <p>LEARN MORE</p>
                        <Button
                            mode="white"
                            size="small"
                            text="ORDER NOW"
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <div className="autopilot_content_right">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At exercitationem possimus dolor eum maxime
                        impedit!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Autopilot;
