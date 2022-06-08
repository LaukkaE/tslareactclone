import './css/App.css';

import Navbar from './components/Navbar';
import Landingpage from './Routes/LandingPage/LandingPage';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Landingpage />
        </div>
    );
}

export default App;
