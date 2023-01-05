import './App.css';
import assets from "./assets/favicon.png";
import Switch from './components/Switch';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='Header'>
        <img src={assets} alt="img"></img>
        <h1>Ready To Go</h1>
        </div>
      </header>
      <div>
        <Switch />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
