import React from 'react'
import  './Settings.scss';
import BlurSlider from './BlurSlider';
import TransparencySlider from './TransparencySlider';
import Output from './Output';

function Settings() {
  return (
    <div id='settings'>
      <div id="sliders">
        <BlurSlider />
        <TransparencySlider />
      </div>
      <Output />
    </div>
  )
}

export default Settings
