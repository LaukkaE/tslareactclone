import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3range.jpg';
import { ModalContext } from '../../utils/ModalContext';

const Model3Range = ({ active }) => {
    const setModal = useContext(ModalContext);

    return (
        <div className={`model3range ${active ? 'model3range_active' : ''}`}>
            <div
                className="background"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="background_panels">
                    <div className="background_panels_range">
                        <div className="background_panels_info">602 km</div>
                        <div className="background_panels_text">
                            Go anywhere with up to 602 km of range on a single
                            charge
                        </div>
                    </div>
                    <div className="background_panels_chargetime">
                        <div className="background_panels_info">15 min</div>
                        <div className="background_panels_text">
                            on a single charge 15 min Recharge up to 275 km in
                            15 minutes at Supercharger locations
                        </div>
                    </div>
                    <div className="background_panels_superchargers">
                        <div className="background_panels_info">35,000+</div>
                        <div className="background_panels_text">
                            Superchargers placed along well-traveled routes
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
        </div>
    );
};

export default Model3Range;
