import React from 'react';
import '../css/Button.css';

// Modes: dark, light, white, transparent
// Sizes: large, small, round

const Button = ({ mode, text, size = 'large' }) => {
    return (
        <button className={`button button_mode_${mode} button_size_${size}`}>
            {text}
        </button>
    );
};

export default Button;
