import './App.css';
import Model3 from './components/Model3';
import ModelS from './components/ModelS';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';
import Solar from './components/Solar';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ModelY />
            <Model3 />
            <ModelS />
            <ModelX />
            <Solar />
        </div>
    );
}

export default App;
