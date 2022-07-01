import React from 'react';
import '../css/Button.css';

// Modes: dark, light, white, transparent
// Sizes: large, small, round

const Button = ({ mode = 'white', text, size = 'large', onClick = null }) => {
    return (
        <button
            className={`button button_mode_${mode} button_size_${size}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
