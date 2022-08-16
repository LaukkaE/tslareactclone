import React from 'react';
import VideoCarousel from '../../components/VideoCarousel';
import background from '../../pics/models/modelsinterior.jpg';

const ModelSInterior = () => {
    return (
        <div className="modelsinterior">
            <div className="introtext toggleable">
                <h1>Interior of the Future</h1>
            </div>
            <img src={background} alt="" />
            <VideoCarousel />
        </div>
    );
};

export default ModelSInterior;
