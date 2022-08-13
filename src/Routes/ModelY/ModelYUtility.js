
import ModelYUtilityMobile from './ModelYUtilityMobile';
import ModelYUtilityMain from './ModelYUtilityMain';

const ModelYUtility = ({ mobile }) => {
    return <> {mobile ? <ModelYUtilityMobile /> : <ModelYUtilityMain />}</>;
};

export default ModelYUtility;
