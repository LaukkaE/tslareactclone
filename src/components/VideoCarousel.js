import React, { useEffect, useState } from 'react';
import vid1 from '..//pics/videocarousel/carouselvid1.mp4';
import vid2 from '..//pics/videocarousel/carouselvid2.mp4';
import vid3 from '..//pics/videocarousel/carouselvid3.mp4';
import vid4 from '..//pics/videocarousel/carouselvid4.mp4';
import vid5 from '..//pics/videocarousel/carouselvid5.mp4';
import '..//css/VideoCarousel.css';
import { useRef } from 'react';

const VideoCarousel = () => {
    const [activeVideo, setActiveVideo] = useState(1);
    const [videoInfo, setVideoInfo] = useState({});
    const videoRef = useRef();

    useEffect(() => {
        if (activeVideo === 1) {
            setVideoInfo({
                source: vid1,
                videointro: 'Cinematic Experience',
                text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.',
            });
        } else if (activeVideo === 2) {
            setVideoInfo({
                source: vid2,
                videointro: 'Yoke Steering',
                text: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
            });
        } else if (activeVideo === 3) {
            setVideoInfo({
                source: vid3,
                videointro: 'Perfect Environment',
                text: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment',
            });
        } else if (activeVideo === 4) {
            setVideoInfo({
                source: vid4,
                videointro: 'Redesigned Second Row',
                text: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
            });
        } else if (activeVideo === 5) {
            setVideoInfo({
                source: vid5,
                videointro: 'Console-Grade Gaming',
                text: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility.',
            });
        }
        // Make video element reload to change video when src changes
        videoRef.current?.load();
    }, [activeVideo]);

    const handleChangeVideo = (vidnumber = null) => {
        if (vidnumber != null) {
            setActiveVideo(vidnumber);
        } else {
            if (activeVideo < 5) {
                setActiveVideo((prev) => prev + 1);
            } else {
                setActiveVideo(1);
            }
        }
    };
    return (
        <div className="videocarousel">
            <div className="video_container">
                <video
                    autoPlay
                    muted
                    id="videocarousel-video"
                    onEnded={() => handleChangeVideo()}
                    ref={videoRef}
                >
                    <source src={videoInfo.source} type="video/mp4" />
                </video>
            </div>
            <div className="video_text_container">
                <div className="video_buttons">
                    <ul>
                        <li
                            className={`video_button ${
                                activeVideo === 1 ? 'active' : ''
                            }`}
                            onClick={() => handleChangeVideo(1)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeVideo === 2 ? 'active' : ''
                            }`}
                            onClick={() => handleChangeVideo(2)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeVideo === 3 ? 'active' : ''
                            }`}
                            onClick={() => handleChangeVideo(3)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeVideo === 4 ? 'active' : ''
                            }`}
                            onClick={() => handleChangeVideo(4)}
                        ></li>
                        <li
                            className={`video_button ${
                                activeVideo === 5 ? 'active' : ''
                            }`}
                            onClick={() => handleChangeVideo(5)}
                        ></li>
                    </ul>
                </div>
                <h2>{videoInfo.videointro}</h2>
                <p>{videoInfo.text}</p>
            </div>
        </div>
    );
};

export default VideoCarousel;
