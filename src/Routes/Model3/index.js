import React from 'react';
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

const Model3 = () => {
    const scrollDir = useScrollDirection();
    return (
        <div className="model3component">
            <Model3Main />
            <Model3Safety />
            <Model3Performance />
            <Model3AWD />
            <Model3Range />
            <Model3Autopilot />
            <Model3Interior />
            <Model3Specs />
            <Model3Order />
        </div>
    );
};

export default Model3;
