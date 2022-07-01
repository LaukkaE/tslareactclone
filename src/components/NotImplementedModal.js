import React, { useContext } from 'react';
import '../css/Modal.css';
import Button from './Button';
import ReactDom from 'react-dom';
import { ModalContext } from '../utils/ModalContext';

const NotImplementedModal = () => {
    const setModal = useContext(ModalContext);

    return ReactDom.createPortal(
        <div className="modal">
            <div
                className="modal_background"
                onClick={() => setModal(false)}
            ></div>
            <div className="modal_content">
                <p>Content not implemented in this demo</p>
                <Button
                    mode={'white'}
                    text="Close"
                    size={'small'}
                    onClick={() => setModal(false)}
                />
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default NotImplementedModal;
