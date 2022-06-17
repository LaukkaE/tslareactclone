import React from 'react';
import '../css/Button.css';

const Button = ({ mode, text, size = 'large' }) => {
    return (
        <button className={`button button_${mode} button_${size}`}>
            {text}
        </button>
    );
};

export default Button;
