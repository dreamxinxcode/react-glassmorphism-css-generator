import React, { useContext } from 'react'
import './ColorPicker.scss';
import { SettingsContext } from '../../SettingsContext';
import { hexToRGB } from '../../helpers';

function ColorPicker() {
  const [settings, setSettings] = useContext(SettingsContext);

  const handleChange = (event) => {
    const rgb = hexToRGB(event.target.value);
    setSettings(prev => ({...prev, color: rgb}));
  }

  return (
    <div id='color-picker'>
      <span>Color</span>
      <input onChange={handleChange} type="color" id="color" name="color" value="#ffffff"></input>
    </div>
  )
}

export default ColorPicker
