import React from 'react';
import { CSSTransition } from 'react-transition-group';
import background from '../pics/Desktop-SolarPanels.jpg';
import MainPageActiveElement from './MainPageActiveElement';

const Solar = ({ active }) => {
    return (
        <div
            className="background solar"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <CSSTransition
                unmountOnExit
                in={active}
                timeout={2000}
                classNames="active"
            >
                <div className="active">
                    <MainPageActiveElement elementName={'solar'} />
                </div>
            </CSSTransition>
        </div>
    );
};

export default Solar;
