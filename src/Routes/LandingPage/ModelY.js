import React from 'react';
import background from '../../pics/landingpage/modely.avif';
import MainPageActiveElement from './MainPageActiveElement';
import { CSSTransition } from 'react-transition-group';

const ModelY = ({ active }) => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="background modely"
        >
            <CSSTransition
                unmountOnExit
                in={active}
                timeout={2000}
                classNames="active"
            >
                <div className="active">
                    <MainPageActiveElement elementName={'modely'} />
                </div>
            </CSSTransition>
        </div>
    );
};

export default ModelY;
