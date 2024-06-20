import './App.css';
import b1 from './images/bubble1.svg'
import b2 from './images/bubble2.svg'
import b3 from './images/bubble3.svg'
import b4 from './images/bubble4.svg'
import b5 from './images/bubble5.svg'
import b6 from './images/bubble6.svg'


function App() {
  return (
    <div className="main">
       <header className="header">
        <div className="logo">LOGO</div>
        <button className="connect-button">Connect</button>
      </header>

      <main>
        <div className="bubbles">
          <div className="bubbleL1">          
          <img src={b1} alt="bubble" />
          </div>
          <div className="bubbleL2">
          <img src={b2} alt="bubble" />
          </div>
          <div className="bubbleL3">
          <img src={b3} alt="bubble" />
          </div>
          <div className="bubbleL4">
          <img src={b4} alt="bubble" />
          </div>
          <div className="bubbleR5">
          <img src={b5} alt="bubble" />
          </div>
          <div className="bubbleR6">
          <img src={b6} alt="bubble" />
          </div>
        </div>

        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta, ante eu laoreet efficitur, ipsum velit sodales sem</p>
        <div className="button-group">
          <button className="b1">Button</button>
          <button className="b2">Button</button>
        </div>

        <div className='below'></div>
      </main>
    </div>
  );
}

export default App;
