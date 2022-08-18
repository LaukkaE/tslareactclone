import React from 'react';
import Button from '../../components/Button';
import background from '..//../pics/models/modelsexterior.jpg';
import card1 from '../../pics/models/exteriorcard1.jpg';
import card2 from '../../pics/models/exteriorcard2.jpg';
import card3 from '../../pics/models/exteriorcard3.jpg';

const ModelSExterior = () => {
    return (
        <div className="modelsexterior">
            <div className="exterior_upper horizontal_wrapper">
                <div
                    className="background"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className="exterior_content horizontal_content toggleable">
                    <div className="exterior_content_left">
                        <p>Exterior</p>
                        <h2>Designed for Efficiency</h2>
                        <Button
                            mode="transparent"
                            text={'ORDER NOW'}
                            size="small"
                        />
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
                                <h3>Relentless Performance</h3>
                                <p>
                                    Staggered, performance wheels and tires keep
                                    the car planted and help transfer maximum
                                    power down to the road.
                                </p>
                            </div>
                        </div>
                        <div className="card_right card">
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
                                    makes Model S the most aerodynamic
                                    production car on Earth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card_container">
                        <div className="card_left card">
                            <div className="card_text toggleable">
                                <h3>Refined Styling</h3>
                                <p>
                                    An iconic silhouette meets refreshed,
                                    elegant proportions.
                                </p>
                            </div>
                        </div>
                        <div className="card_right card">
                            <img src={card3} alt="stay connected" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelSExterior;
