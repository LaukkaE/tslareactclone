import background from '../../pics/Charging/chargingmain.jpg';

const ChargingMain = () => {
    return (
        <div
            className={`chargingmain chargingmain_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="introtext toggleable">
                <h1>Stay Charged</h1>
            </div>
            <div className="background_panels">
                <div className="background_panels_1 toggleable">
                    <h1>salamakuva</h1>
                    <p>Charge at Home</p>
                </div>
                <div className="background_panels_2 toggleable">
                    <h1>35,000 +</h1>
                    <p>Global Superchargers</p>
                </div>
                <div className="background_panels_3 toggleable">
                    <h1>35,000 +</h1>
                    <p>{`Wall Connectors at\nDestination Charging\nSites`}</p>
                </div>
            </div>
        </div>
    );
};

export default ChargingMain;
