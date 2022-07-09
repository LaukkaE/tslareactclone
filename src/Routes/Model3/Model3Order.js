import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/model3/model3order.jpg';
import { ModalContext } from '../../utils/ModalContext';

const Model3Order = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className="model3order">
            <div className="order_wrapper">
                <div className="order_content">
                    <h2>Experience Model 3</h2>
                    <div className="order_content_buttons">
                        <Button
                            text="ORDER NOW"
                            mode="white"
                            size="small"
                            onClick={() => setModal(true)}
                        />
                        <Button
                            text="UPDATES"
                            mode="transparent"
                            size="small"
                            onClick={() => setModal(true)}
                        />
                    </div>
                </div>
                <div
                    className="background"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
            </div>
        </div>
    );
};

export default Model3Order;
