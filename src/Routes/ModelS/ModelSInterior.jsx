import React from 'react';
import VideoCarousel from '../../components/VideoCarousel';
import background from '../../pics/models/modelsinterior.avif';
import card1 from '../../pics/models/interiorcard1.avif';
import card2 from '../../pics/models/interiorcard2.mp4';
import card3 from '../../pics/models/interiorcard3.avif';

const ModelSInterior = () => {
    return (
        <div className="modelsinterior">
            <div className="introtext toggleable">
                <h1>Interior of the Future</h1>
            </div>
            <img src={background} alt="" />
            <VideoCarousel />
            <div className="cards">
                <div className="card_container">
                    <div className="card_left card">
                        <img src={card1} alt="stay connected" />
                    </div>
                    <div className="card_right card toggleable">
                        <div className="card_text">
                            <h3>Stay Connected</h3>
                            <p>
                                Instantly connect with multi-device Bluetooth,
                                or fast charge devices with wireless and 36-watt
                                USB-C charging.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card_left card toggleable">
                        <div className="card_text">
                            <h3>Immersive Sound</h3>
                            <p>
                                A 22-speaker, 960-watt audio system with Active
                                Road Noise Reduction offers immersive listening
                                and studio-grade sound quality.
                            </p>
                        </div>
                    </div>
                    <div className="card_right card">
                        <video autoPlay loop muted id="interior-video">
                            <source src={card2} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="card_container">
                    <div className="card_left card">
                        <img src={card3} alt="stay connected" />
                    </div>
                    <div className="card_right card toggleable">
                        <div className="card_text">
                            <h3>Room for Everything</h3>
                            <p>
                                With front and rear trunks and fold-flat seats
                                you can fit your bike without taking the wheel
                                off—and your luggage too.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelSInterior;
