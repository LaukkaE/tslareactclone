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
import { useIntersectionObs } from '../../hooks/useIntersectionObs';
import { useMobileMode } from '../../hooks/useMobileMode';

const ModelY = () => {
    const mobileMode = useMobileMode();
    useIntersectionObs('.toggleable', mobileMode);

    return (
        <div className="modelycomponent">
            <ModelYMain />
            <ModelYSafety mobile={mobileMode} />
            <ModelYUtility mobile={mobileMode} />
            <ModelYAWD />
            <ModelYRange mobile={mobileMode} />
            <Autopilot />
            <Interior />
            <ModelYSpecs />
        </div>
    );
};

export default ModelY;
