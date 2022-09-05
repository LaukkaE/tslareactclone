import { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3main.avif';
import { ModalContext } from '../../utils/ModalContext';

const Model3Main = () => {
    const setModal = useContext(ModalContext);

    const [acceleration, setAcceleration] = useState(0);
    // useEffect to animate acceleration while inside viewport
    useEffect(() => {
        let interval;
        const accDiv = document.querySelector('.model3_main_acceleration');
        const accObs = new IntersectionObserver((e) => {
            e.forEach((entry) => {
                if (entry.isIntersecting) {
                    interval = setInterval(() => {
                        if (acceleration >= 3.3) {
                            clearInterval(interval);
                            return;
                        }
                        setAcceleration((prev) => prev + 0.1);
                    }, 50);
                } else {
                    clearInterval(interval);
                    setAcceleration(0);
                }
            });
        });

        accObs.observe(accDiv);

        return () => {
            accObs.unobserve(accDiv);
            clearInterval(interval);
        };
    }, [acceleration]);

    return (
        <div
            className={`model3main model3main_background background`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <p className="introtext toggleable">Model 3</p>
            <div className="background_panels">
                <div className="background_panels_1 model3_main_acceleration toggleable">
                    <h1>{acceleration.toPrecision(2)} s</h1>
                    <p>0-100 km/h</p>
                </div>
                <div className="background_panels_2 toggleable">
                    <h1>602km</h1>
                    <p>Range (WLTP)</p>
                </div>
                <div className="background_panels_3 toggleable">
                    <h1>AWD</h1>
                    <p>Dual Motor</p>
                </div>
                <div className="background_panels_4 toggleable">
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
