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
import { useScrollDirection } from '../../utils/useScrollDirection';
import {
    Element,
    // animateScroll as scroll,
    scroller,
} from 'react-scroll';
import Model3Bars from './Model3Bars';
import { useState } from 'react';

const Model3 = () => {
    const scrollDir = useScrollDirection();
    const scrollRef = useRef(scrollDir);
    const [activeElement, setActiveElement] = useState('model3main');

    const handleBarClick = (target) => {
        scroller.scrollTo(target, { smooth: true });
        setActiveElement(target);
    };

    // force to the start of the page on page switch/load
    useEffect(() => {
        scroller.scrollTo('model3main');
        setActiveElement('model3main');
    }, []);

    // Add "animate" class to every "toggleable" class thats inside viewport
    useEffect(() => {
        const elements = document.querySelectorAll('.toggleable');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('animate', entry.isIntersecting);
            });
        });
        elements.forEach((e) => {
            observer.observe(e);
        });

        return () => {
            elements.forEach((e) => {
                observer.unobserve(e);
            });
        };
    }, []);

    const executeScroll = () => {
        let scrollDirection = scrollRef.current;
        let offsetY = window.scrollY;
        if (scrollDirection === 'up' && offsetY < window.innerHeight) {
            scroller.scrollTo('model3main', { smooth: true });
            setActiveElement('model3main');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 2)
        ) {
            scroller.scrollTo('model3safety', { smooth: true });
            setActiveElement('model3safety');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 2) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 3)
        ) {
            scroller.scrollTo('model3performance', { smooth: true });
            setActiveElement('model3performance');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 3) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 4)
        ) {
            scroller.scrollTo('model3awd', { smooth: true });
            setActiveElement('model3awd');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 4) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 5)
        ) {
            scroller.scrollTo('model3range', { smooth: true });
            setActiveElement('model3range');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 5) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 6)
        ) {
            scroller.scrollTo('model3autopilot', { smooth: true });
            setActiveElement('model3autopilot');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 6) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 7)
        ) {
            scroller.scrollTo('model3interior', { smooth: true });
            setActiveElement('model3interior');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 7) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 8)
        ) {
            scroller.scrollTo('model3specs', { smooth: true });
            setActiveElement('model3specs');
        } else if (scrollDirection === 'down') {
            scroller.scrollTo('model3order', { smooth: true });
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
        }, 600);
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
