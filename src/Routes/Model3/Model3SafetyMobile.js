import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3safetymobile.avif';
import { ModalContext } from '../../utils/ModalContext';
const Model3SafetyMobile = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`model3safety horizontal_wrapper`}>
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

export default Model3SafetyMobile;
