import React, { useEffect, useState } from 'react';
import img1 from '../pics/imagecarousel/img1.jpg';
import img2 from '../pics/imagecarousel/img2.jpg';
import img3 from '../pics/imagecarousel/img3.jpg';
import img4 from '../pics/imagecarousel/img4.jpg';

import '..//css/VideoCarousel.css';

const ImageCarousel = () => {
    const [activeImage, setActiveImage] = useState(1);
    const [imageInfo, setImageInfo] = useState({});

    useEffect(() => {
        if (activeImage === 1) {
            setImageInfo({
                source: img1,
                videointro: 'Cinematic Experience',
                text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
            });
        } else if (activeImage === 2) {
            setImageInfo({
                source: img2,
                videointro: 'Focus on Driving',
                text: 'The ultimate focus on driving: no stalks, no shifting. Model X is the best SUV to drive, and the best SUV to be driven in.',
            });
        } else if (activeImage === 3) {
            setImageInfo({
                source: img3,
                videointro: 'Perfect Environment',
                text: 'Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.',
            });
        } else if (activeImage === 4) {
            setImageInfo({
                source: img4,
                videointro: 'Spacious Cabin',
                text: 'Model X offers a spacious cabin with the worlds largest panoramic windshield and seating for up to seven.',
            });
        }
    }, [activeImage]);

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeImage < 4) {
                setActiveImage((prev) => prev + 1);
            } else {
                setActiveImage(1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [activeImage]);

    return (
        <div className="videocarousel">
            <div className="video_container">
                <img src={imageInfo.source} alt="" id="imagecarousel-img" />
            </div>
            <div className="video_text_container">
                <div className="video_buttons">
                    <ul>
                        <li
                            className={`video_button ${
                                activeImage === 1 ? 'active' : ''
                            }`}
                            onClick={() => setActiveImage(1)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeImage === 2 ? 'active' : ''
                            }`}
                            onClick={() => setActiveImage(2)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeImage === 3 ? 'active' : ''
                            }`}
                            onClick={() => setActiveImage(3)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeImage === 4 ? 'active' : ''
                            }`}
                            onClick={() => setActiveImage(4)}
                        ></li>
                    </ul>
                </div>
                <h2>{imageInfo.videointro}</h2>
                <p>{imageInfo.text}</p>
            </div>
        </div>
    );
};

export default ImageCarousel;
