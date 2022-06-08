import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '../../components/Button';

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
        } else {
            return null;
        }
    };

    return (
        <>
            <p className="intro_text">{introText()}</p>
            <div className="buttons">
                <Router>
                    <Link to={`/${elementName}/design`}>
                        <Button mode="dark" text="CUSTOM ORDER" />
                    </Link>
                    {elementName !== 'solar' && (
                        <Link to={`/${elementName}/`}>
                            <Button mode="light" text="LEARN MORE" />
                        </Link>
                    )}
                </Router>
            </div>
        </>
    );
};

export default MainPageActiveElement;
