import React, { useContext } from 'react';
import Button from '../../../components/Button';
import background from '../../../pics/models/modelsrangevideo.mp4';
import { ModalContext } from '../../../utils/ModalContext';

const ModelSRangeMobile = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`modelsrange horizontal_wrapper `}>
            <div
                className="background"
                // style={{ backgroundImage: `url(${background})` }}
            >
                <video loop autoPlay muted id="models-range-video">
                    <source src={background} type="video/mp4" />
                </video>
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">652 km</div>
                        <div className="background_panels_text">
                            Go anywhere with up to 652 km of range on a single
                            charge
                        </div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">15 min</div>
                        <div className="background_panels_text">
                            Recharge up to 322 km in 15 minutes at Supercharger
                            locations
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">35,000+</div>
                        <div className="background_panels_text">
                            Superchargers placed along well-traveled routes
                            around the world
                        </div>
                    </div>
                </div>
            </div>
            <div className="range_content horizontal_content">
                <div className="range_content_text toggleable">
                    <p>Range</p>
                    <h2>Go Anywhere</h2>
                    <div className="range_content_buttons toggleable">
                        <Button
                            mode="white"
                            size="small"
                            text="ORDER NOW"
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <div className="range_content_right toggleable">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, odit! Minus cumque ut impedit consectetur
                        molestiae ad nemo sit quaerat illo, in rem ipsam ab
                        porro. In sapiente, eaque.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ModelSRangeMobile;
