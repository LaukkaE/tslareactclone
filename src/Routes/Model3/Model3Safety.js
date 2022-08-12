import React from 'react';
import background from '../../pics/model3/model3safety.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';

const Model3Safety = () => {
    const occupantArray = [
        'Adult Occupant',
        'Child Occupant',
        'Pedestrian',
        'Safety assist',
    ];
    return (
        <div className={`model3safety vertical_wrapper_left`}>
            <div className="safety_content toggleable vertical_content">
                <h4>Safety</h4>
                <h1>Built for safety</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum sint minus aspernatur sequi officiis rem adipisci.
                    Quidem eos, debitis, ipsa voluptatum quas velit vitae
                    dolorum tempore repellat delectus fugit labore, facere
                    quisquam deserunt adipisci? Voluptatibus voluptate in
                    quaerat magni quas facere laudantium facilis.
                </p>
                <h3>5-Star Safety Rating</h3>
                <div className="safety_rating">
                    {occupantArray.map((e, i) => {
                        return (
                            <div className="occupant_div" key={i}>
                                <p className="occupant"> {e}</p>
                                <p className="stars">
                                    {'                '}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="fa-star"
                                    />{' '}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="fa-star"
                                    />{' '}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="fa-star"
                                    />{' '}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="fa-star"
                                    />{' '}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className="fa-star"
                                    />
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="safety_buttons toggleable">
                    <Button
                        mode={'white'}
                        text={<>{<FontAwesomeIcon icon={faPlus} />}</>}
                        size={'round'}
                    />
                    <p>LEARN MORE</p>
                    <Button
                        mode={'white'}
                        text={'ORDER NOW'}
                        size={'small'}
                    ></Button>
                </div>
            </div>
            <div
                className="background safety_background"
                style={{ backgroundImage: `url(${background})` }}
            ></div>
        </div>
    );
};

export default Model3Safety;
