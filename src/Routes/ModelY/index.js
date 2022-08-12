import React, { useEffect } from 'react';
import Autopilot from '../../components/Autopilot';
import Interior from '../../components/Interior';
import '../../css/ModelY.css';
import ModelYAWD from './ModelYAWD';
import ModelYMain from './ModelYMain';
import ModelYRange from './ModelYRange';
import ModelYSafety from './ModelYSafety';
import ModelYUtility from './ModelYUtility';
import ModelYSpecs from './ModelYSpecs';

const ModelY = () => {
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

    return (
        <div className="modelycomponent">
            <ModelYMain />
            <ModelYSafety />
            <ModelYUtility />
            <ModelYAWD />
            <ModelYRange />
            <Autopilot />
            <Interior />
            <ModelYSpecs />
        </div>
    );
};

export default ModelY;
