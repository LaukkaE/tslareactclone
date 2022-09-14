import React from 'react';
import '../css/Button.css';

// Modes: dark, light, white, transparent, specs
// Sizes: large, small, round, thin, stretch

const Button = ({
    mode = 'white',
    text,
    size = 'large',
    onClick = null,
    active = null,
}) => {
    return (
        <button
            className={`button button_mode_${mode} button_size_${size} ${
                active ? 'button_active' : ''
            }`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
