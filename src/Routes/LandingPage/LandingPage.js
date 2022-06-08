import { useRef, useState } from 'react';

import {
    Element,
    // animateScroll as scroll,
    scroller,
} from 'react-scroll';
import { useScrollDirection } from '../../utils/useScrollDirection';
import Model3 from './Model3';
import ModelS from './ModelS';
import ModelX from './ModelX';
import ModelY from './ModelY';
import Solar from './Solar';
import '../../css/LandingPage.css';

const Landingpage = () => {
    const scrollDir = useScrollDirection();
    const [activeElement, setActiveElement] = useState('modely');

    const executeScroll = () => {
        // console.log('execute');
        let offsetY = window.scrollY;
        if (scrollDir === 'up' && offsetY < window.innerHeight) {
            scroller.scrollTo('modelyElement', { smooth: true });
            setActiveElement('modely');
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 2)
        ) {
            scroller.scrollTo('model3Element', { smooth: true });
            setActiveElement('model3');
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 2) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 3)
        ) {
            scroller.scrollTo('modelsElement', { smooth: true });
            setActiveElement('models');
        } else if (
            (scrollDir === 'down' && offsetY <= window.innerHeight * 3) ||
            (scrollDir === 'up' &&
                offsetY >= window.innerHeight &&
                offsetY <= window.innerHeight * 4)
        ) {
            scroller.scrollTo('modelxElement', { smooth: true });
            setActiveElement('modelx');
        } else if (scrollDir === 'down' && offsetY >= window.innerHeight * 3) {
            scroller.scrollTo('solarElement', { smooth: true });
            setActiveElement('solar');
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
    // const asd = () => {
    //     console.log(activeElement);
    // };

    return (
        <div
            className="landing"
            // onClick={() => asd()}
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
                <Solar active={activeElement === 'solar' ? true : false} />
            </Element>
        </div>
    );
};

export default Landingpage;
