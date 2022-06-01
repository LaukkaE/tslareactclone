import React from 'react';
import { CSSTransition } from 'react-transition-group';
import background from '../pics/ms-homepage-desktop.jpg';
import MainPageActiveElement from './MainPageActiveElement';

const ModelS = ({ active }) => {
    return (
        <div
            className="background models"
            style={{ backgroundImage: `url(${background})` }}
        >
            <CSSTransition
                unmountOnExit
                in={active}
                timeout={2000}
                classNames="active"
            >
                <div className="active">
                    <MainPageActiveElement elementName={'models'} />
                </div>
            </CSSTransition>
        </div>
    );
};

export default ModelS;
