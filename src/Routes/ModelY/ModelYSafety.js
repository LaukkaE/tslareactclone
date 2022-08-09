import React from 'react';
import Button from '../../components/Button';
import background from '../../pics/modely/modelysafety.avif';
const ModelYSafety = ({ active }) => {
    return (
        <div className={`modelysafety ${active ? 'modelysafety_active' : ''}`}>
            <div className="safety_content">
                <h4>Safety</h4>
                <h1>Designed for safety</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perferendis nihil soluta ea corporis voluptatum, commodi
                    molestias laborum sint aliquam quidem incidunt inventore!
                    Tenetur est porro.
                </p>

                <div className="safety_buttons">
                    <Button
                        mode={'white'}
                        text={'ORDER NOW'}
                        size={'small'}
                    ></Button>
                </div>
            </div>
            <div
                className="background safety_background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
        </div>
    );
};

export default ModelYSafety;
