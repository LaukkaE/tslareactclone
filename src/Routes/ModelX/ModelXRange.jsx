import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/modelx/modelxrange.avif';
import { ModalContext } from '../../utils/ModalContext';

const ModelXRange = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`modelxrange vertical_wrapper_right`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_1 toggleable">
                        <div className="background_panels_info">533 km</div>
                        <div className="background_panels_text">
                            Go anywhere with up to 533 km of range (WLTP) on a
                            single charge{' '}
                        </div>
                    </div>
                    <div className="background_panels_2 toggleable">
                        <div className="background_panels_info">15 min</div>
                        <div className="background_panels_text">
                            Recharge up to 241 km in 15 minutes at Supercharger
                            locations
                        </div>
                    </div>
                    <div className="background_panels_3 toggleable">
                        <div className="background_panels_info">35,000+</div>
                        <div className="background_panels_text">
                            Superchargers placed along well- traveled routes
                            around the world
                        </div>
                    </div>
                </div>
            </div>
            <div className="range_content vertical_content">
                <div className="range_content_text toggleable">
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
                <div className="range_content_buttons toggleable">
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

export default ModelXRange;
