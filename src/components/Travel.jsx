import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import '../css/Travel.css';
import route1 from '../pics/travel/route1.avif';
import route2 from '../pics/travel/route2.avif';
import route3 from '../pics/travel/route3.avif';
import route4 from '../pics/travel/route4.avif';
import { ModalContext } from '../utils/ModalContext';
import Button from './Button';

const Travel = () => {
    const [activeRoute, setActiveRoute] = useState(1);
    const setModal = useContext(ModalContext);

    const routes = {
        1: {
            route: 'Munich to Zurich',
            distance: '311 km',
            image: route1,
        },
        2: {
            route: 'Amsterdam to Brussels',
            distance: '203 km',
            image: route2,
        },
        3: {
            route: 'Brussels to Paris',
            distance: '320 km',
            image: route3,
        },
        4: {
            route: 'Oslo to Gothenburg',
            distance: '295 km',
            image: route4,
        },
    };

    useEffect(() => {
        let timer = setInterval(() => {
            if (activeRoute === 4) {
                setActiveRoute(1);
            } else {
                setActiveRoute((prev) => prev + 1);
            }
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeRoute]);

    return (
        <div className="travel">
            <div className="upper_text">
                <h1>Freedom to Travel</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Pariatur perferendis architecto illo ex animi aperiam.
                </p>
            </div>
            <div className="image_container">
                <img src={routes[activeRoute].image} alt="" />
            </div>
            <div className="travel_content">
                <div
                    className={`${
                        activeRoute === 1
                            ? 'travel_content_box_selected'
                            : 'travel_content_box'
                    }`}
                    onClick={() => setActiveRoute(1)}
                >
                    <div className="travel_content_box_text">
                        <h3>{routes[1].route}</h3>
                    </div>
                    <div className="travel_content_box_specs">
                        <h2>{routes[1].distance}</h2>
                    </div>
                </div>
                <div
                    className={`${
                        activeRoute === 2
                            ? 'travel_content_box_selected'
                            : 'travel_content_box'
                    }`}
                    onClick={() => setActiveRoute(2)}
                >
                    <div className="travel_content_box_text">
                        <h3>{routes[2].route}</h3>
                    </div>
                    <div className="travel_content_box_specs">
                        <h2>{routes[2].distance}</h2>
                    </div>
                </div>
                <div
                    className={`${
                        activeRoute === 3
                            ? 'travel_content_box_selected'
                            : 'travel_content_box'
                    }`}
                    onClick={() => setActiveRoute(3)}
                >
                    <div className="travel_content_box_text">
                        <h3>{routes[3].route}</h3>
                    </div>
                    <div className="travel_content_box_specs">
                        <h2>{routes[3].distance}</h2>
                    </div>
                </div>
                <div
                    className={`${
                        activeRoute === 4
                            ? 'travel_content_box_selected'
                            : 'travel_content_box'
                    }`}
                    onClick={() => setActiveRoute(4)}
                >
                    <div className="travel_content_box_text">
                        <h3>{routes[4].route}</h3>
                    </div>
                    <div className="travel_content_box_specs">
                        <h2>{routes[4].distance}</h2>
                    </div>
                </div>
            </div>
            <div className="travel_button">
                <Button
                    mode="white"
                    size="small"
                    text="LEARN MORE"
                    onClick={() => setModal(true)}
                />{' '}
            </div>
        </div>
    );
};

export default Travel;
