import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import '../css/Features.css';
import route1 from '../pics/features/features1.mp4';
import route2 from '../pics/features/features2.mp4';
import route3 from '../pics/features/features3.mp4';
import route4 from '../pics/features/features4.mp4';

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(1);
    const videoRef = useRef(null);

    const features = {
        1: {
            intro: 'Navigate on Autopilot',
            text: 'Active guidance from on-ramp to off-ramp',
            video: route1,
        },
        2: {
            intro: 'Auto Lane Change',
            text: 'Automatically change lanes while driving on the highway',
            video: route2,
        },
        3: {
            intro: 'Summon',
            text: 'Automatically retrieve your car',
            video: route3,
        },
        4: {
            intro: 'Autopark',
            text: 'Parallel and perpendicular parking with a single touch',
            video: route4,
        },
    };

    useEffect(() => {
        videoRef.current?.load();
    }, [activeFeature]);

    const handleChangeVideo = (vidnumber = null) => {
        if (vidnumber != null) {
            setActiveFeature(vidnumber);
        } else {
            if (activeFeature < 4) {
                setActiveFeature((prev) => prev + 1);
            } else {
                setActiveFeature(1);
            }
        }
    };

    return (
        <div className="features">
            <div className="upper_text">
                <h1>Features</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Pariatur perferendis architecto illo ex animi aperiam.
                </p>
            </div>
            <div className="video_container">
                <video
                    autoPlay
                    muted
                    id="features-video"
                    onEnded={() => handleChangeVideo()}
                    ref={videoRef}
                >
                    <source
                        src={features[activeFeature].video}
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="features_content">
                {Object.values(features).map((value, index) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                activeFeature === index + 1
                                    ? 'features_content_box_selected'
                                    : 'features_content_box'
                            }`}
                            onClick={() => setActiveFeature(index + 1)}
                        >
                            <div className="features_content_box_text">
                                <h3>{value.intro}</h3>
                                <p>{value.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
