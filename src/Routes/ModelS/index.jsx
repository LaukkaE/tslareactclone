import React from 'react';
import Autopilot from '../../components/Autopilot';
import Powertrain from '../../components/Powertrain';
import Travel from '../../components/Travel';
import '../../css/ModelS.css';
import { useIntersectionObs } from '../../hooks/useIntersectionObs';
import { useMobileMode } from '../../hooks/useMobileMode';
import ModelSRangeMobile from './mobile/ModelSRangeMobile';
import ModelSSafetyMobile from './mobile/ModelSSafetyMobile';
import ModelSExterior from './ModelSExterior';
import ModelSInterior from './ModelSInterior';
import ModelSMain from './ModelSMain';
import ModelSPerformance from './ModelSPerformance';
import ModelSRange from './ModelSRange';
import ModelSSafety from './ModelSSafety';
import Features from '../../components/Features';
import ModelSSpecs from './ModelSSpecs';
import ModelSOrder from './ModelSOrder';

const ModelS = () => {
    const mobileMode = useMobileMode();
    useIntersectionObs('.toggleable', mobileMode);

    return (
        <div className="modelscomponent">
            <ModelSMain />
            <ModelSInterior />
            <ModelSPerformance />
            <Powertrain model="models" />
            <ModelSExterior />
            {mobileMode ? <ModelSRangeMobile /> : <ModelSRange />}
            <Travel />
            {mobileMode ? <ModelSSafetyMobile /> : <ModelSSafety />}
            <Autopilot />
            <Features />
            <ModelSSpecs />
            <ModelSOrder />
        </div>
    );
};

export default ModelS;
