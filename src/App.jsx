import './app.scss';
import DigitalClock from './components/digitalClock/DigitalClock';
import CountDown from './components/countDown/CountDown';


function App() {
  return (
    <div className="App">
      
      <DigitalClock/>
      <CountDown/>

    </div>
  );
}

export default App;
