import { useIntersectionObs } from '../../hooks/useIntersectionObs';
import { useMobileMode } from '../../hooks/useMobileMode';
import '../../css/ModelX.css';
import ModelXMain from './ModelXmain';
import ModelXInterior from './ModelXInterior';
import ModelXPerformance from './ModelXPerformance';
import Powertrain from '../../components/Powertrain';
import ModelXUtilityMobile from './mobile/ModelXUtilityMobile';
import ModelXUtility from './ModelXUtility';
import ModelXExterior from './ModelXExterior';
import ModelXRangeMobile from './mobile/ModelXRangeMobile';
import ModelXRange from './ModelXRange';
import Travel from '../../components/Travel';
import ModelXSafetyMobile from './mobile/ModelXSafetyMobile';
import ModelXSafety from './ModelXSafety';
import Features from '../../components/Features';
import Autopilot from '../../components/Autopilot';
import ModelXSpecs from './ModelXSpecs';
import ModelXOrder from './ModelXOrder';

const ModelX = () => {
    const mobileMode = useMobileMode();
    useIntersectionObs('.toggleable', mobileMode);

    return (
        <div className="modelxcomponent">
            <ModelXMain />
            <ModelXInterior />
            <ModelXPerformance />
            <Powertrain model="modelx" />
            {mobileMode ? <ModelXUtilityMobile /> : <ModelXUtility />}
            <ModelXExterior />
            {mobileMode ? <ModelXRangeMobile /> : <ModelXRange />}
            <Travel />
            {mobileMode ? <ModelXSafetyMobile /> : <ModelXSafety />}
            <Autopilot />
            <Features />
            <ModelXSpecs />
            <ModelXOrder />
        </div>
    );
};

export default ModelX;
