import { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/Model3Main.jpg';
import { ModalContext } from '../../utils/ModalContext';

const Model3Main = ({ active }) => {
    const setModal = useContext(ModalContext);

    const [acceleration, setAcceleration] = useState(0);

    // UseEffect to animate acceleration number
    useEffect(() => {
        // delay the zeroing until acceleration is not seen
        if (!active) {
            setTimeout(() => {
                setAcceleration(0);
            }, 1000);
            return;
        }
        const interval = setInterval(() => {
            if (acceleration >= 3.3) {
                clearInterval(interval);
                return;
            }
            setAcceleration((prev) => prev + 0.1);
        }, 50);
        return () => {
            clearInterval(interval);
        };
    }, [active, acceleration]);

    return (
        <div
            className={`model3main model3main_background background ${
                active ? 'model3main_active' : ''
            }`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <p className="introtext">Model 3</p>
            <div className="background_panels">
                <div className="info_acceleration">
                    <h1>{acceleration.toPrecision(2)} s</h1>
                    <p>0-100 km/h</p>
                </div>
                <div className="info_range">
                    <h1>602km</h1>
                    <p>Range (WLTP)</p>
                </div>
                <div className="info_awd">
                    <h1>AWD</h1>
                    <p>Dual Motor</p>
                </div>
                <div className="info_button">
                    <Button
                        text="ORDER NOW"
                        mode="transparent"
                        size="small"
                        onClick={() => setModal(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Model3Main;
