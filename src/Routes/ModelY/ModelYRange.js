import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modely/rangevideo.mp4';
import { ModalContext } from '../../utils/ModalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChair,
    faTruckRampBox,
    faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';

const ModelYRange = ({ active }) => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`modelyrange ${active ? 'modelyrange_active' : ''}`}>
            <div
                className="background"
                // style={{ backgroundImage: `url(${background})` }}
            >
                <video loop autoPlay muted id="range-video">
                    <source src={background} type="video/mp4" />
                </video>
                <div className="background_panels">
                    <div className="background_panels_range">
                        <div className="background_panels_info">533 km</div>
                        <div className="background_panels_text">
                            Go anywhere with up to 533 km of range (WLTP) on a
                            single charge{' '}
                        </div>
                    </div>
                    <div className="background_panels_chargetime">
                        <div className="background_panels_info">15 min</div>
                        <div className="background_panels_text">
                            Recharge up to 241 km in 15 minutes at Supercharger
                            locations
                        </div>
                    </div>
                    <div className="background_panels_superchargers">
                        <div className="background_panels_info">35,000+</div>
                        <div className="background_panels_text">
                            Superchargers placed along well- traveled routes
                            around the world
                        </div>
                    </div>
                </div>
            </div>
            <div className="range_content">
                <div className="range_content_text">
                    <p>Range</p>
                    <h2>Go Anywhere</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, odit! Minus cumque ut impedit consectetur
                        molestiae ad nemo sit quaerat illo, in rem ipsam ab
                        porro. In sapiente, eaque consectetur maxime officia non
                        dolores earum aspernatur, nostrum culpa, esse nobis.
                    </p>
                </div>
                <div className="range_content_buttons">
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

export default ModelYRange;
