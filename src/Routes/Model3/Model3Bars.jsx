import React, { useEffect, useState } from 'react';

const Model3Bars = ({ activeElement, handleClick }) => {
    const [mode, setMode] = useState('white');

    useEffect(() => {
        if (
            activeElement === 'model3main' ||
            activeElement === 'model3performance' ||
            activeElement === 'model3range' ||
            activeElement === 'model3performance' ||
            activeElement === 'model3interior' ||
            activeElement === 'model3specs' ||
            activeElement === 'model3order'
        ) {
            setMode('white');
        } else {
            setMode('black');
        }
    }, [activeElement]);

    return (
        <div className={`model3bars bars_${mode}`}>
            <div
                className={activeElement === 'model3main' ? 'active' : ''}
                onClick={() => handleClick('model3main')}
            >
                <p>MODEL 3</p>
            </div>
            <div
                className={activeElement === 'model3safety' ? 'active' : ''}
                onClick={() => handleClick('model3safety')}
            >
                <p>SAFETY</p>
            </div>
            <div
                className={
                    activeElement === 'model3performance' ? 'active' : ''
                }
                onClick={() => handleClick('model3performance')}
            >
                <p>PERFORMANCE</p>
            </div>
            <div
                className={activeElement === 'model3awd' ? 'active' : ''}
                onClick={() => handleClick('model3awd')}
            >
                <p>ALL-WHEEL DRIVE</p>
            </div>
            <div
                className={activeElement === 'model3range' ? 'active' : ''}
                onClick={() => handleClick('model3range')}
            >
                <p>RANGE</p>
            </div>
            <div
                className={activeElement === 'model3autopilot' ? 'active' : ''}
                onClick={() => handleClick('model3autopilot')}
            >
                <p>AUTOPILOT</p>
            </div>
            <div
                className={activeElement === 'model3interior' ? 'active' : ''}
                onClick={() => handleClick('model3interior')}
            >
                <p>INTERIOR</p>
            </div>
            <div
                className={activeElement === 'model3specs' ? 'active' : ''}
                onClick={() => handleClick('model3specs')}
            >
                <p>SPECS</p>
            </div>
            <div
                className={activeElement === 'model3order' ? 'active' : ''}
                onClick={() => handleClick('model3order')}
            >
                <p>ORDER</p>
            </div>
        </div>
    );
};

export default Model3Bars;
