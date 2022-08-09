import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modely/modelyutility.jpg';
import { ModalContext } from '../../utils/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChair,
    faTruckRampBox,
    faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';

const ModelYUtility = ({ active }) => {
    const setModal = useContext(ModalContext);

    return (
        <div
            className={`modelyutility ${active ? 'modelyutility_active' : ''}`}
        >
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_passengers">
                        <div className="background_panels_info">
                            <FontAwesomeIcon icon={faChair} /> 5
                        </div>
                        <div className="background_panels_text">
                            Comfortable seating for five adults
                        </div>
                    </div>
                    <div className="background_panels_seating">
                        <div className="background_panels_info">
                            {' '}
                            <FontAwesomeIcon icon={faUniversalAccess} />
                        </div>
                        <div className="background_panels_text">
                            Versatile seating and storage for cargo and
                            passengers
                        </div>
                    </div>
                    <div className="background_panels_cargo">
                        <div className="background_panels_info">
                            <FontAwesomeIcon icon={faTruckRampBox} />
                        </div>
                        <div className="background_panels_text">
                            Easy access to the trunk makes loading and unloading
                            convenient
                        </div>
                    </div>
                </div>
            </div>
            <div className="utility_content">
                <div className="utility_content_text">
                    <p>Utility</p>
                    <h2>A Place For Everything</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, odit! Minus cumque ut impedit consectetur
                        molestiae ad nemo sit quaerat illo, in rem ipsam ab
                        porro. In sapiente, eaque consectetur maxime officia non
                        dolores earum aspernatur, nostrum culpa, esse nobis.
                    </p>
                </div>
                <div className="utility_content_buttons">
                    <Button
                        mode="white"
                        size="small"
                        text="ORDER NOW"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModelYUtility;
