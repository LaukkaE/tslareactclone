import ModelYRangeMain from './ModelYRangeMain';
import ModelYRangeMobile from './ModelYRangeMobile';

const ModelYRange = ({ mobile }) => {
    return <>{mobile ? <ModelYRangeMobile /> : <ModelYRangeMain />}</>;
};

export default ModelYRange;
