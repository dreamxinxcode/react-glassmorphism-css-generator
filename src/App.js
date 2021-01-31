import './App.css';
import Glass from './components/Glass';
import BlurSlider from './components/BlurSlider';
import TransparencySlider from './components/TransparencySlider';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <Glass />
      <BlurSlider />
      <TransparencySlider />
      <Output />
    </div>
  );
}

export default App;
