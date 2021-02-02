import React, { useContext } from 'react'
import './Slider.scss';
import { SettingsContext } from '../../SettingsContext';

function TransparencySlider() {
  const [settings, setSettings] = useContext(SettingsContext)

  const handleChange = (event) => {
    setSettings(prev => ({...prev, transparency: event.target.value}));
  }

  return (
    <div className='slider'>
      <div className="indicator">
        <label htmlFor="transparency">Transparency</label>
        <span>{settings.transparency}</span>
      </div>
      <input onChange={handleChange} type="range" id="transparency" name="transparency" min="0.00" max="1.00" step='0.01' value={settings.transparency}></input>
    </div>
  )
}

export default TransparencySlider
