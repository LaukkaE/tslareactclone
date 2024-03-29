import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3awd.avif';
import mobilebackground from '../../pics/model3/model3awdmobile.avif';

const Model3AWD = ({ mobile }) => {
    return (
        <div className={`model3awd horizontal_wrapper`}>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${
                        mobile ? mobilebackground : background
                    })`,
                }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">2</div>
                        <div className="background_panels_text">
                            Independent motors digitally control torque to the
                            front and rear wheels
                        </div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">10 ms</div>
                        <div className="background_panels_text">
                            Dual motors respond to changing conditions in as
                            little as 10 milliseconds
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">
                            <FontAwesomeIcon icon={faCloudShowersHeavy} />
                        </div>
                        <div className="background_panels_text">
                            Unparalleled traction and control, in all weather
                            conditions
                        </div>
                    </div>
                </div>
            </div>
            <div className="awd_content horizontal_content toggleable">
                <div className="awd_content_left">
                    <p>All-Wheel Drive</p>
                    <h2>Dual Motor</h2>
                    <Button mode="white" text={'ORDER NOW'} size="small" />
                </div>
                <div className="awd_content_right">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam quos similique quo itaque ea dolores, rerum optio
                    dolorem, illum, voluptates sint consectetur quaerat
                    temporibus inventore! Similique inventore ea ex numquam?
                </div>
            </div>
        </div>
    );
};

export default Model3AWD;
