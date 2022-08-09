import {
    faPersonShelter,
    faPlus,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Button from './Button';
import background from '../../src/pics/model3/model3interior.jpg';
import { ModalContext } from '../utils/ModalContext';

const Interior = ({ active }) => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`model3interior ${
                active ? 'model3interior_active' : ''
            }`}
        >
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_inches">
                        <div className="background_panels_info">15 inch</div>
                        <div className="background_panels_text">
                            A touchscreen display designed to improve over time
                        </div>
                    </div>
                    <div className="background_panels_wifi">
                        <div className="background_panels_info">
                            {<>{<FontAwesomeIcon icon={faWifi} />}</>}
                        </div>
                        <div className="background_panels_text">
                            Over-the-air software updates introduce new
                            features, functionality and performance
                        </div>
                    </div>
                    <div className="background_panels_glass">
                        <div className="background_panels_info">
                            {<>{<FontAwesomeIcon icon={faPersonShelter} />}</>}
                        </div>
                        <div className="background_panels_text">
                            An expansive Glass Roof provides more headroom and
                            UV protection
                        </div>
                    </div>
                </div>
            </div>
            <div className="interior_content">
                <div className="interior_content_left">
                    <p>Interior</p>
                    <h2>Built Around the Driver</h2>
                    <div className="interior_content_left_buttons">
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
                <div className="interior_content_right">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores incidunt sequi ex ipsam soluta aliquid
                        sit nulla, maiores beatae quia vel dignissimos expedita?
                        Nam error doloremque incidunt a suscipit quae?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Interior;
