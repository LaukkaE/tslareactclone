import React from 'react';

import ModelYSafetyMain from './ModelYSafetyMain';
import ModelYSafetyMobile from './ModelYSafetyMobile';
const ModelYSafety = ({ mobile }) => {
    return <> {mobile ? <ModelYSafetyMobile /> : <ModelYSafetyMain />}</>;
};

export default ModelYSafety;
