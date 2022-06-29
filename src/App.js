import './css/App.css';

import Navbar from './components/Navbar';
import Landingpage from './Routes/LandingPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ModelS from './Routes/ModelS';
import Model3 from './Routes/Model3';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <Landingpage />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/models"
                        element={
                            <>
                                <Navbar />
                                <ModelS />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/model3"
                        element={
                            <>
                                <Navbar color='white' mode='absolute' />
                                <Model3 />
                            </>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
