import React, { useEffect, useRef } from 'react';
import Model3Main from './Model3Main';
import Model3Safety from './Model3Safety';
import '../../css/Model3.css';
import Model3Performance from './Model3Performance';
import Model3AWD from './Model3AWD';
import Model3Range from './Model3Range';
import Model3Specs from './Model3Specs';
import Model3Order from './Model3Order';
import Autopilot from '../../components/Autopilot';
import Interior from '../../components/Interior';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import {
    Element,
    // animateScroll as scroll,
    scroller,
} from 'react-scroll';
import Model3Bars from './Model3Bars';
import { useState } from 'react';
import { useIntersectionObs } from '../../hooks/useIntersectionObs';
import { useMobileMode } from '../../hooks/useMobileMode';

const Model3 = () => {
    const scrollDir = useScrollDirection();
    const scrollRef = useRef(scrollDir);
    const [activeElement, setActiveElement] = useState('model3main');
    const mobileMode = useMobileMode();
    useIntersectionObs('.toggleable', mobileMode);

    const handleBarClick = (target) => {
        scroller.scrollTo(target, { smooth: true });
        setActiveElement(target);
    };

    // force to the start of the page on page switch/load
    useEffect(() => {
        scroller.scrollTo('model3main');
        setActiveElement('model3main');
    }, []);

    const scrollerScrollFunction = (locationToScroll) => {
        scroller.scrollTo(locationToScroll, {
            smooth: true,
            ignoreCancelEvents: true,
            duration: 300,
        });
    };

    const executeScroll = () => {
        let scrollDirection = scrollRef.current;
        let offsetY = window.scrollY;
        if (scrollDirection === 'up' && offsetY < window.innerHeight) {
            scrollerScrollFunction('model3main');
            setActiveElement('model3main');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 2)
        ) {
            scrollerScrollFunction('model3safety');
            setActiveElement('model3safety');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 2) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 3)
        ) {
            scrollerScrollFunction('model3performance');
            setActiveElement('model3performance');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 3) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 4)
        ) {
            scrollerScrollFunction('model3awd');
            setActiveElement('model3awd');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 4) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 5)
        ) {
            scrollerScrollFunction('model3range');
            setActiveElement('model3range');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 5) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 6)
        ) {
            scrollerScrollFunction('model3autopilot');
            setActiveElement('model3autopilot');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 6) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 7)
        ) {
            scrollerScrollFunction('model3interior');
            setActiveElement('model3interior');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 7) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 8)
        ) {
            scrollerScrollFunction('model3specs');
            setActiveElement('model3specs');
        } else if (scrollDirection === 'down') {
            scrollerScrollFunction('model3order');
            setActiveElement('model3order');
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
        }, 150);
    };
    useEffect(() => {
        scrollRef.current = scrollDir;
    }, [scrollDir]);

    return (
        <div
            className={`model3component`}
            onWheel={(e) => handleScroll(e)}
            onTouchMove={(e) => handleScroll(e)}
        >
            <Model3Bars
                activeElement={activeElement}
                handleClick={handleBarClick}
            />
            <Element name="model3main">
                <Model3Main
                    active={activeElement === 'model3main' ? true : false}
                />
            </Element>
            <Element name="model3safety">
                <Model3Safety mobile={mobileMode} />
            </Element>
            <Element name="model3performance">
                <Model3Performance mobile={mobileMode} />
            </Element>
            <Element name="model3awd">
                <Model3AWD mobile={mobileMode} />
            </Element>
            <Element name="model3range">
                <Model3Range mobile={mobileMode} />
            </Element>
            <Element name="model3autopilot">
                <Autopilot />
            </Element>
            <Element name="model3interior">
                <Interior />
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
