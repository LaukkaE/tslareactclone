import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modely/modelyawd.jpg';

const ModelYAWD = ({ active }) => {
    const [acceleration, setAcceleration] = useState(0);

    // UseEffect to animate acceleration number
    useEffect(() => {
        if (!active) {
            setAcceleration(0);
            return;
        }
        const interval = setInterval(() => {
            if (acceleration >= 3.3) {
                clearInterval(interval);
                return;
            }
            setAcceleration((prev) => prev + 0.1);
        }, 50);
        return () => {
            clearInterval(interval);
        };
    }, [active, acceleration]);

    return (
        <div className={`modelyawd ${active ? 'modelyawd_active' : ''}`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_motors">
                        <div className="background_panels_info">2</div>
                        <div className="background_panels_text">
                            Independent motors digitally control torque to the
                            front and rear wheels
                        </div>
                    </div>
                    <div className="background_panels_reaction">
                        <div className="background_panels_info">
                            {acceleration.toPrecision(2)} s
                        </div>
                        <div className="background_panels_text">
                            Quickest acceleration—from zero to 100 km/h* in as
                            little as 3.7 seconds
                        </div>
                    </div>
                    <div className="background_panels_awd">
                        <div className="background_panels_info">
                            <FontAwesomeIcon icon={faCloudShowersHeavy} />
                        </div>
                        <div className="background_panels_text">
                            Capable in rain, snow, mud and off-road with
                            superior traction control
                        </div>
                    </div>
                </div>
            </div>
            <div className="awd_content">
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

export default ModelYAWD;
