import React from 'react';
import background from '../../pics/models/modelsinterior.jpg';
import card1 from '../../pics/modelx/interiorcard1.jpg';
import card2 from '../../pics/modelx/interiorcard2.jpg';
import card3 from '../../pics/modelx/interiorcard3.jpg';
import ImageCarousel from '../../components/ImageCarousel';

const ModelXInterior = () => {
    return (
        <div className="modelxinterior">
            <div className="introtext toggleable">
                <h1>Interior of the Future</h1>
            </div>
            <img src={background} alt="" />
            <ImageCarousel />
            <div className="cards">
                <div className="card_container">
                    <div className="card_left card">
                        <img src={card1} alt="stay connected" />
                    </div>
                    <div className="card_right card toggleable">
                        <div className="card_text">
                            <h3>Wireless Gaming</h3>
                            <p>
                                Up to 10 teraflops of processing power enables
                                in-car gaming on-par with today’s newest
                                consoles. Wireless controller compatibility lets
                                you game from any seat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card_left card toggleable">
                        <div className="card_text">
                            <h3>Stay Connected</h3>
                            <p>
                                Multi-device Bluetooth, wireless and USB-C
                                charging for every passenger, with enough power
                                to fast-charge your tablets and laptop.
                            </p>
                        </div>
                    </div>
                    <div className="card_right card">
                        <img src={card2} alt="stay connected" />
                    </div>
                </div>
                <div className="card_container">
                    <div className="card_left card">
                        <img src={card3} alt="stay connected" />
                    </div>
                    <div className="card_right card toggleable">
                        <div className="card_text">
                            <h3>Your Best Audio System</h3>
                            <p>
                                A 22-speaker, 960-watt audio system with Active
                                Road Noise Reduction offers the best listening
                                experience wherever you are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelXInterior;
