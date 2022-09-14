import React, { useContext } from 'react';
import Button from '../../components/Button';
import background from '../../pics/models/modelsorder.avif';
import { ModalContext } from '../../utils/ModalContext';

const ModelSOrder = () => {
    const setModal = useContext(ModalContext);

    return (
        <div className="modelsorder">
            <div className="order_wrapper">
                <div className="order_content toggleable">
                    <h2>Model S</h2>
                    <div className={`order_content_buttons`}>
                        <Button
                            text="ORDER NOW"
                            mode="white"
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

export default ModelSOrder;
