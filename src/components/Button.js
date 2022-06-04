import React from 'react';
import './css/Button.css';

const Button = ({ mode, text }) => {
    return <button className={`button button_${mode}`}>{text}</button>;
};

export default Button;
