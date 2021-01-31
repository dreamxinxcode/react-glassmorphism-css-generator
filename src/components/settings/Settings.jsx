import React from 'react'
import  './Settings.scss';
import BlurSlider from './BlurSlider';
import TransparencySlider from './TransparencySlider';
import Output from './Output';

function Settings() {
  return (
    <div id='settings'>
      <BlurSlider />
      <TransparencySlider />
      <Output />
    </div>
  )
}

export default Settings
