import React from 'react';
import Button from '../../components/Button';
import background from '../../pics/modely/modelysafety.avif';
const ModelYSafetyMobile = () => {
    return (
        <div className={`modelysafety horizontal_wrapper`}>
            <div
                className="background safety_background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="safety_content horizontal_content">
                <div className="safety_content_text toggleable">
                    <p>Safety</p>
                    <h2>Designed for safety</h2>
                    <div className="safety_buttons toggleable">
                        <Button
                            mode={'white'}
                            text={'ORDER NOW'}
                            size={'small'}
                        ></Button>
                    </div>
                </div>
                <div className="safety_content_right">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perferendis nihil soluta ea corporis voluptatum,
                        commodi molestias laborum sint aliquam quidem incidunt
                        inventore! Tenetur est porro.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModelYSafetyMobile;
