import './App.css';
import Display from './components/display/Display';
import Settings from './components/settings/Settings';
import { SettingsProvider } from './SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <div className="App">
          <Display />
          <Settings />
      </div>
    </SettingsProvider>
  );
}

export default App;
