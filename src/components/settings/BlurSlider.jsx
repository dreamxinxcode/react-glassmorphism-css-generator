import React, { useContext } from 'react'
import './Slider.scss';
import { SettingsContext } from '../../SettingsContext';

function BlurSlider() {
  const [settings, setSettings] = useContext(SettingsContext);

  const handleChange = (event) => {
    setSettings(prev => ({...prev, blur: event.target.value}));
  }

  return (
    <div className='slider'>
      <div className="indicator">
        <label htmlFor="blur">Blur</label>
        <span>{settings.blur}</span>
      </div>
      <input onChange={handleChange} type="range" id="blur" name="blur" min="0.0" max="20.0" step='0.1'></input>
    </div>
  )
}

export default BlurSlider
