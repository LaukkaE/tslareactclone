import React, { useRef } from 'react';
import Model3Main from './Model3Main';
import Model3Safety from './Model3Safety';
import '../../css/Model3.css';
import Model3Performance from './Model3Performance';
import Model3AWD from './Model3AWD';
import Model3Range from './Model3Range';
import Model3Interior from './ModelrInterior';
import Model3Specs from './Model3Specs';
import Model3Order from './Model3Order';
import Model3Autopilot from './Model3Autopilot';
import { useScrollDirection } from '../../utils/useScrollDirection';
import {
    Element,
    // animateScroll as scroll,
    scroller,
} from 'react-scroll';

const Model3 = () => {
    const scrollDir = useScrollDirection();

    const executeScroll = () => {
        // console.log('execute');
        let offsetY = window.scrollY;
        if (scrollDir === 'up' && offsetY < window.innerHeight) {
            scroller.scrollTo('model3main', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 2)
        ) {
            scroller.scrollTo('model3safety', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 2) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 3)
        ) {
            scroller.scrollTo('model3performance', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 3) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 4)
        ) {
            scroller.scrollTo('model3awd', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 4) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 5)
        ) {
            scroller.scrollTo('model3range', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 5) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 6)
        ) {
            scroller.scrollTo('model3autopilot', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 6) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 7)
        ) {
            scroller.scrollTo('model3interior', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 7) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 8)
        ) {
            scroller.scrollTo('model3specs', { smooth: true });
        } else if (scrollDir === 'down') {
            scroller.scrollTo('model3order', { smooth: true });
        } else {
            console.log('foo');
        }
        // console.log(scrollDir, offsetY, window.innerHeight);
    };

    let timeout = useRef(null);
    const handleScroll = () => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            executeScroll();
        }, 600);
    };

    return (
        <div
            className="model3component"
            onWheel={(e) => handleScroll(e)}
            onTouchMove={(e) => handleScroll(e)}
        >
            <Element name="model3main">
                <Model3Main />
            </Element>
            <Element name="model3safety">
                <Model3Safety />
            </Element>
            <Element name="model3performance">
                <Model3Performance />
            </Element>
            <Element name="model3awd">
                <Model3AWD />
            </Element>
            <Element name="model3range">
                <Model3Range />
            </Element>
            <Element name="model3autopilot">
                <Model3Autopilot />
            </Element>
            <Element name="model3interior">
                <Model3Interior />
            </Element>
            <Element name="model3specs">
                <Model3Specs />
            </Element>
            <Element name="model3order">
                <Model3Order />
            </Element>
        </div>
    );
};

export default Model3;
