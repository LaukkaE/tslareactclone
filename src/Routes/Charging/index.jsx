import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import DataDisclaimer from '../../components/DataDisclaimer';
import '../../css/Charging.css';
import { useIntersectionObs } from '../../hooks/useIntersectionObs';
import { useMobileMode } from '../../hooks/useMobileMode';
import ChargingDestination from './ChargingDestination';
import ChargingHome from './ChargingHome';
import ChargingMain from './ChargingMain';
import ChargingSuperCharger from './ChargingSuperCharger';
import ChargingDestinationMobile from './mobile/ChargingDestinationMobile';
import ChargingSuperchargerMobile from './mobile/ChargingSuperchargerMobile';

const Charging = () => {
    const mobileMode = useMobileMode();
    useIntersectionObs('.toggleable', mobileMode);

    // force to the start of the page on page switch/load
    useEffect(() => {
        scroller.scrollTo('chargingmain');
    }, []);
    return (
        <div className="chargingcomponent">
            <ChargingMain />
            {mobileMode ? (
                <ChargingSuperchargerMobile />
            ) : (
                <ChargingSuperCharger />
            )}
            <ChargingHome />
            {mobileMode ? (
                <ChargingDestinationMobile />
            ) : (
                <ChargingDestination />
            )}
            <DataDisclaimer />
        </div>
    );
};

export default Charging;
