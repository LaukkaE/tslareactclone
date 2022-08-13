import Model3SafetyMobile from './Model3SafetyMobile';
import Model3SafetyMain from './Model3SafetyMain';

const Model3Safety = ({ mobile }) => {
    return <>{mobile ? <Model3SafetyMobile /> : <Model3SafetyMain />}</>;
};

export default Model3Safety;
