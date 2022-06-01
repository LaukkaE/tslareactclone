import React from 'react';
import './css/background.css';
import background from '../pics/Desktop-ModelY.jpg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ModelY = ({ active }) => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="background modely"
        >
            {active && (
                <div className="active">
                    <h2 className="intro_text">Model Y</h2>
                    <div className="buttons">
                        <Router>
                            <Link to="/modely/design">
                                <button>CUSTOM ORDER</button>
                            </Link>
                            <Link to="/modely">
                                <button>LEARN MORE</button>
                            </Link>
                        </Router>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModelY;
