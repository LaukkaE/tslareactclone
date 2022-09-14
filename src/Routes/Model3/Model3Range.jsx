import Model3RangeMain from './Model3RangeMain';
import Model3RangeMobile from './Model3RangeMobile';

const Model3Range = ({ mobile }) => {
    return <>{mobile ? <Model3RangeMobile /> : <Model3RangeMain />}</>;
};

export default Model3Range;
