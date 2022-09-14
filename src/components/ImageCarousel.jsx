import React, { useEffect, useState } from 'react';
import img1 from '../pics/imagecarousel/img1.avif';
import img2 from '../pics/imagecarousel/img2.avif';
import img3 from '../pics/imagecarousel/img3.avif';
import img4 from '../pics/imagecarousel/img4.avif';

import '..//css/VideoCarousel.css';

const ImageCarousel = () => {
    const [activeImage, setActiveImage] = useState(1);

    const imageData = {
        1: {
            source: img1,
            videointro: 'Cinematic Experience',
            text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
        },
        2: {
            source: img2,
            videointro: 'Focus on Driving',
            text: 'The ultimate focus on driving: no stalks, no shifting. Model X is the best SUV to drive, and the best SUV to be driven in.',
        },
        3: {
            source: img3,
            videointro: 'Perfect Environment',
            text: 'Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.',
        },
        4: {
            source: img4,
            videointro: 'Spacious Cabin',
            text: 'Model X offers a spacious cabin with the worlds largest panoramic windshield and seating for up to seven.',
        },
    };

    useEffect(() => {
        let interval = setInterval(() => {
            if (activeImage < 4) {
                setActiveImage((prev) => prev + 1);
            } else {
                setActiveImage(1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [activeImage, imageData.length]);

    return (
        <div className="videocarousel">
            <div className="video_container">
                <img
                    src={imageData[activeImage].source}
                    alt=""
                    id="imagecarousel-img"
                />
            </div>
            <div className="video_text_container">
                <div className="video_buttons">
                    <ul>
                        {Object.values(imageData).map((value, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`video_button ${
                                        activeImage === index + 1
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => setActiveImage(index + 1)}
                                ></li>
                            );
                        })}
                    </ul>
                </div>
                <h2>{imageData[activeImage].videointro}</h2>
                <p>{imageData[activeImage].text}</p>
            </div>
        </div>
    );
};

export default ImageCarousel;
