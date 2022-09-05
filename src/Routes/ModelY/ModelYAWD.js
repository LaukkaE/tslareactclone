import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modely/modelyawd.avif';

const ModelYAWD = () => {
    const [acceleration, setAcceleration] = useState(0);

    // useEffect to animate acceleration while inside viewport
    useEffect(() => {
        let interval;
        const accDiv = document.querySelector('.modely_awd_acceleration');
        const accObs = new IntersectionObserver((e) => {
            e.forEach((entry) => {
                if (entry.isIntersecting) {
                    interval = setInterval(() => {
                        if (acceleration >= 3.3) {
                            clearInterval(interval);
                            return;
                        }
                        setAcceleration((prev) => prev + 0.1);
                    }, 50);
                } else {
                    clearInterval(interval);
                    setAcceleration(0);
                }
            });
        });

        accObs.observe(accDiv);

        return () => {
            accObs.unobserve(accDiv);
            clearInterval(interval);
        };
    }, [acceleration]);

    return (
        <div className={`modelyawd horizontal_wrapper`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">2</div>
                        <div className="background_panels_text">
                            Independent motors digitally control torque to the
                            front and rear wheels
                        </div>
                    </div>
                    <div className="background_panels_2 modely_awd_acceleration toggleable">
                        <div className="background_panels_info">
                            {acceleration.toPrecision(2)} s
                        </div>
                        <div className="background_panels_text">
                            Quickest acceleration—from zero to 100 km/h* in as
                            little as 3.7 seconds
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
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

export default ModelYAWD;
