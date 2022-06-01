import { useRef } from 'react';

import {
    Element,
    // animateScroll as scroll,
    scroller,
} from 'react-scroll';
import { useScrollDirection } from '../utils/useScrollDirection';
import Model3 from './Model3';
import ModelS from './ModelS';
import ModelX from './ModelX';
import ModelY from './ModelY';
import Solar from './Solar';

const Landingpage = () => {
    const scrollDir = useScrollDirection();

    const executeScroll = () => {
        console.log('execute');
        let offsetY = window.scrollY;
        if (scrollDir === 'up' && offsetY < window.innerHeight) {
            scroller.scrollTo('modelyElement', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 2)
        ) {
            scroller.scrollTo('model3Element', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 2) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 3)
        ) {
            scroller.scrollTo('modelsElement', { smooth: true });
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 3) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 4)
        ) {
            scroller.scrollTo('modelxElement', { smooth: true });
        } else if (scrollDir === 'down' && offsetY >= window.innerHeight * 3) {
            scroller.scrollTo('solarElement', { smooth: true });
        } else {
            console.log('foo');
        }
        console.log(scrollDir, offsetY, window.innerHeight);
    };

    let timeout = useRef(null);
    const handleScroll = () => {
        console.log(scrollDir);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            executeScroll();
        }, 600);
    };

    return (
        <div className="landing" onWheel={(e) => handleScroll(e)}>
            <Element name="modelyElement">
                <ModelY />
            </Element>
            <Element name="model3Element">
                <Model3 />
            </Element>
            <Element name="modelsElement">
                <ModelS />
            </Element>
            <Element name="modelxElement">
                <ModelX />
            </Element>
            <Element name="solarElement">
                <Solar />
            </Element>
        </div>
    );
};

export default Landingpage;
