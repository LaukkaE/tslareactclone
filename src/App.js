import './css/App.css';

import Navbar from './components/Navbar';
import Landingpage from './Routes/LandingPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ModelS from './Routes/ModelS';
import Model3 from './Routes/Model3';
import NotImplementedModal from './components/NotImplementedModal';
import { useState } from 'react';
import { ModalContext } from './utils/ModalContext';
import ModelY from './Routes/ModelY';
import Footer from './components/Footer';
import ModelX from './Routes/ModelX';

function App() {
    const [notImplementedOpen, setNotImplementedOpen] = useState(false);
    return (
        <div className="App">
            <ModalContext.Provider value={setNotImplementedOpen}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Navbar />
                                    <Landingpage />
                                    <Footer />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/models"
                            element={
                                <>
                                    <Navbar mode="absolute" />
                                    <ModelS />
                                    <Footer color="black" mode="absolute" />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/model3"
                            element={
                                <>
                                    <Navbar color="white" mode="absolute" />
                                    <Model3 />
                                    <Footer />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/modely"
                            element={
                                <>
                                    <Navbar color="white" mode="absolute" />
                                    <ModelY />
                                    <Footer />
                                </>
                            }
                        ></Route>
                        <Route
                            path="/modelx"
                            element={
                                <>
                                    <Navbar color="black" mode="absolute" />
                                    <ModelX />
                                    {/* <Footer /> */}
                                </>
                            }
                        ></Route>
                    </Routes>
                </BrowserRouter>
                {notImplementedOpen && <NotImplementedModal />}
            </ModalContext.Provider>
        </div>
    );
}

export default App;
