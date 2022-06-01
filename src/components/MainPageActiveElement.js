import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const MainPageActiveElement = ({ elementName, active }) => {
    const introText = () => {
        if (elementName === 'modely') {
            return 'Model Y';
        } else if (elementName === 'model3') {
            return 'Model 3';
        } else if (elementName === 'models') {
            return 'Model S';
        } else if (elementName === 'modelx') {
            return 'Model X';
        } else if (elementName === 'solar') {
            return 'Solar';
        }
    };

    return (
        <>
            <h2 className="intro_text">{introText()}</h2>
            <div className="buttons">
                <Router>
                    <Link to={`/${elementName}/design`}>
                        <button className="button button_dark">
                            CUSTOM ORDER
                        </button>
                    </Link>
                    {elementName !== 'solar' && (
                        <Link to={`/${elementName}/`}>
                            <button className="button button_light">
                                LEARN MORE
                            </button>
                        </Link>
                    )}
                </Router>
            </div>
        </>
    );
};

export default MainPageActiveElement;
