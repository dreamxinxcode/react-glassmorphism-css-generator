import './App.css';
import Glass from './components/Glass';
import Settings from './components/settings/Settings';
import { SettingsProvider } from './SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <div className="App">
          <Glass />
          <Settings />
      </div>
    </SettingsProvider>
  );
}

export default App;
