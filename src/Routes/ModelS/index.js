import React from 'react';
import '../../css/ModelS.css';
import { useIntersectionObs } from '../../hooks/useIntersectionObs';
import { useMobileMode } from '../../hooks/useMobileMode';
import ModelSInterior from './ModelSInterior';
import ModelSMain from './ModelSMain';

const ModelS = () => {
    const mobileMode = useMobileMode();
    useIntersectionObs('.toggleable', mobileMode);



    return (
    <div className="modelscomponent">
        <ModelSMain />
        <ModelSInterior />
    </div>
    )

};

export default ModelS;
