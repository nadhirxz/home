import './App.css';
import Dot from './components/Dot';


function App() {
  return (
    <div className="App">
      <header className="App-header">
            <div className="App-head-text">
                <h1 id="header-text">-</h1>
            </div>
            <div className="App-hidden">
                <div className="intro-wrapper">
                    <div className="nav-wrapper">
                        <div className="dots-wrapper"><Dot color="#FC6058" /><Dot color="#FEC02F" /><Dot color="#2ACA3E" /></div>
                        <div className="contact-nav"><a href="mailto:nadhir02@gmail.com">contact</a></div>
                    </div>
                    <div className="left-column">
                        test
                    </div>
                    <div className="right-column">
                        test
                    </div>
                </div>
            </div>
      </header>
    </div>
  );
}

export default App;