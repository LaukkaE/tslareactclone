import React from 'react';
import { CSSTransition } from 'react-transition-group';
import background from '../../pics/landingpage/modelx.avif';
import MainPageActiveElement from './MainPageActiveElement';

const ModelX = ({ active }) => {
    return (
        <div
            className="background modelx"
            style={{ backgroundImage: `url(${background})` }}
        >
            <CSSTransition
                unmountOnExit
                in={active}
                timeout={2000}
                classNames="active"
            >
                <div className="active">
                    <MainPageActiveElement elementName={'modelx'} />
                </div>
            </CSSTransition>
        </div>
    );
};

export default ModelX;
