import React from 'react';
import Button from '../../components/Button';
import background from '..//../pics/modelx/modelxexterior.jpg';
import card1 from '../../pics/modelx/exteriorcard1.jpg';
import card2 from '../../pics/modelx/exteriorcard2.jpg';
import card3 from '../../pics/modelx/exteriorcard3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faJetFighter } from '@fortawesome/free-solid-svg-icons';

const ModelXExterior = () => {
    return (
        <div className="modelxexterior">
            <div className="exterior_upper horizontal_wrapper">
                <div
                    className="background"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="background_panels">
                        <div className="background_panels_1 toggleable">
                            <div className="background_panels_info">
                                <FontAwesomeIcon icon={faCarSide} />
                            </div>
                            <div className="background_panels_text">
                                New wheels and improved handling
                            </div>
                        </div>
                        <div className="background_panels_2 toggleable">
                            <div className="background_panels_info">0.24</div>
                            <div className="background_panels_text">
                                Lowest-drag SUV on Earth
                            </div>
                        </div>
                        <div className="background_panels_3 toggleable">
                            <div className="background_panels_info">
                                <FontAwesomeIcon icon={faJetFighter} />
                            </div>
                            <div className="background_panels_text">
                                Refined exterior styling
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exterior_content horizontal_content toggleable">
                    <div className="exterior_content_left">
                        <p>Exterior</p>
                        <h2>Designed for Efficiency</h2>
                        <Button mode="white" text={'ORDER NOW'} size="small" />
                    </div>
                    <div className="exterior_content_right toggleable">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo sunt eligendi aperiam itaque incidunt nesciunt
                        ipsam. Quisquam, cum architecto nostrum porro dicta
                        omnis recusandae in adipisci provident, consectetur
                        cupiditate consequatur.
                    </div>
                </div>
            </div>
            <div className="exterior_lower">
                <div className="cards">
                    <div className="card_container">
                        <div className="card_left card">
                            <div className="card_text toggleable">
                                <h3>New Wheels and Tires</h3>
                                <p>
                                    New performance tires deliver better
                                    handling and ride quality with lower rolling
                                    resistance, and are paired with new
                                    aerodynamic wheels for an updated look.
                                </p>
                            </div>
                        </div>
                        <div className="card_right card toggleable">
                            <img src={card1} alt="stay connected" />
                        </div>
                    </div>
                    <div className="card_container">
                        <div className="card_left card">
                            <img src={card2} alt="stay connected" />
                        </div>
                        <div className="card_right card toggleable">
                            <div className="card_text">
                                <h3>Optimized Aerodynamics</h3>
                                <p>
                                    Attention to detail on all exterior surfaces
                                    makes Model X the most aerodynamic
                                    production SUV on Earth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card_container">
                        <div className="card_left card">
                            <div className="card_text toggleable">
                                <h3>Refined Styling</h3>
                                <p>
                                    Exterior design combines an iconic look with
                                    elegant proportions.
                                </p>
                            </div>
                        </div>
                        <div className="card_right card toggleable">
                            <img src={card3} alt="stay connected" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelXExterior;
