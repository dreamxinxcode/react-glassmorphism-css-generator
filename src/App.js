import './App.css';
import Glass from './components/Glass';
import BlurSlider from './components/BlurSlider';
import TransparencySlider from './components/TransparencySlider';
import Output from './components/Output';
import { SettingsProvider } from './SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <div className="App">
          <Glass />
          <BlurSlider />
          <TransparencySlider />
          <Output />
      </div>
    </SettingsProvider>
  );
}

export default App;
