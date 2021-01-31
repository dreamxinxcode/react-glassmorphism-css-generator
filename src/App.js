import './App.css';
import Glass from './components/Glass';
import BlurSlider from './components/BlurSlider';
import TransparencySlider from './components/TransparencySlider';


function App() {
  return (
    <div className="App">
      <Glass />
      <BlurSlider />
      <TransparencySlider />
    </div>
  );
}

export default App;
