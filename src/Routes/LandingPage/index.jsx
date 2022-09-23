import { useEffect, useRef, useState } from 'react';

import {
    Element,
    // animateScroll as scroll,
    scroller,
} from 'react-scroll';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import Model3 from './Model3';
import ModelS from './ModelS';
import ModelX from './ModelX';
import ModelY from './ModelY';
import Solar from './Solar';
import '../../css/LandingPage.css';

const Landingpage = () => {
    const scrollDir = useScrollDirection();
    const scrollRef = useRef(scrollDir);
    const [activeElement, setActiveElement] = useState('modely');

    // force to the start of the page on page switch/load
    useEffect(() => {
        scroller.scrollTo('modely');
        setActiveElement('modely');
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
            scrollerScrollFunction('modelyElement');
            setActiveElement('modely');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 2)
        ) {
            scrollerScrollFunction('model3Element');
            setActiveElement('model3');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 2) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 3)
        ) {
            scrollerScrollFunction('modelsElement');
            setActiveElement('models');
        } else if (
            (scrollDirection === 'down' && offsetY <= window.innerHeight * 3) ||
            (scrollDirection === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 4)
        ) {
            scrollerScrollFunction('modelxElement');
            setActiveElement('modelx');
        } else if (
            scrollDirection === 'down' &&
            offsetY >= window.innerHeight * 3
        ) {
            scrollerScrollFunction('solarElement');
            setActiveElement('charging');
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
            className="landing"
            onWheel={(e) => handleScroll(e)}
            onTouchMove={(e) => handleScroll(e)}
        >
            <Element name="modelyElement">
                <ModelY active={activeElement === 'modely' ? true : false} />
            </Element>
            <Element name="model3Element">
                <Model3 active={activeElement === 'model3' ? true : false} />
            </Element>
            <Element name="modelsElement">
                <ModelS active={activeElement === 'models' ? true : false} />
            </Element>
            <Element name="modelxElement">
                <ModelX active={activeElement === 'modelx' ? true : false} />
            </Element>
            <Element name="solarElement">
                <Solar active={activeElement === 'charging' ? true : false} />
            </Element>
        </div>
    );
};

export default Landingpage;
