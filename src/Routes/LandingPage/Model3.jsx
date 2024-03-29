import React from 'react';
import { CSSTransition } from 'react-transition-group';
import background from '../../pics/landingpage/model3.avif';
import MainPageActiveElement from './MainPageActiveElement';

const Model3 = ({ active }) => {
    return (
        <div
            className="background model3"
            style={{ backgroundImage: `url(${background})` }}
        >
            <CSSTransition
                unmountOnExit
                in={active}
                timeout={2000}
                classNames="active"
            >
                <div className="active">
                    <MainPageActiveElement elementName={'model3'} />
                </div>
            </CSSTransition>
        </div>
    );
};

export default Model3;
