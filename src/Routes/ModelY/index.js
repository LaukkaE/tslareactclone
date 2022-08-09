import React from 'react';
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
    return (
        <div>
            <ModelYMain />
            <ModelYSafety />
            <ModelYUtility active={true} />
            <ModelYAWD active={true} />
            <ModelYRange active={true} />
            <Autopilot active={true} />
            <Interior active={true} />
            <ModelYSpecs active={true} />
        </div>
    );
};

export default ModelY;
