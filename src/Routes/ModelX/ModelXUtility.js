import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modelx/modelxutility.avif';
import { ModalContext } from '../../utils/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from '@fortawesome/free-solid-svg-icons';
const ModelXUtility = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`modelxutility vertical_wrapper_left`}>
            <div className="utility_content vertical_content">
                <div className="utility_content_text toggleable">
                    <p>Utility</p>
                    <h2>Even More Capable</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, odit! Minus cumque ut impedit consectetur
                        molestiae ad nemo sit quaerat illo, in rem ipsam ab
                        porro. In sapiente, eaque consectetur maxime officia non
                        dolores earum aspernatur, nostrum culpa, esse nobis.
                    </p>
                </div>
                <div className="utility_content_buttons toggleable">
                    <Button
                        mode="white"
                        size="small"
                        text="ORDER NOW"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">2,614 L</div>
                        <div className="background_panels_text">
                            Up to 2,614 L of storage
                        </div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">2,300 kg</div>
                        <div className="background_panels_text">
                            Tow up to 2,300 kg
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">
                            <FontAwesomeIcon icon={faDove} />
                        </div>
                        <div className="background_panels_text">
                            Falcon Wing doors
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelXUtility;
