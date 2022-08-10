import React, { useContext } from 'react';
import background from '../../pics/model3/model3performance.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import { ModalContext } from '../../utils/ModalContext';

const Model3Performance = ({ active }) => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`model3performance`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info"> 3.3s</div>
                        <div className="background_panels_text">
                            Quickest acceleration—from 0 - 100 km/h* in as
                            little as 3.3 seconds
                        </div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">261 km/h</div>
                        <div className="background_panels_text">
                            Improved handling and aerodynamics allow for a top
                            speed of 261 km/h
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">AWD</div>
                        <div className="background_panels_text">
                            Dual Motor All-Wheel Drive instantly controls
                            traction and torque, in all weather conditions
                        </div>
                    </div>
                </div>
            </div>
            <div className="performance_content toggleable">
                <div className="performance_content_left">
                    <div className="performance_content_left_text">
                        <p>Performance</p>
                        <h2>Quickest Acceleration</h2>
                    </div>
                    <div className="performance_content_left_buttons">
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
                <div className="performance_content_right">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste rerum ut iure suscipit cum! Temporibus quos, culpa
                        officiis ipsa deserunt eos numquam consectetur
                        cupiditate, velit totam eius dolorum labore? Excepturi
                        at suscipit magni eaque sit quae voluptate numquam!
                        Expedita, maxime.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Model3Performance;
