import React, { useContext } from 'react'
import './Output.scss';
import Clipboard from './Clipboard';
import { SettingsContext } from '../../SettingsContext';

function Output() {
  const [settings, setSettings] = useContext(SettingsContext);

  return (
    <div id='output'>
      <Clipboard />
      <div id="code">
        <span id='background'>background: rgba({settings.color}, {settings.transparency} );</span>
        <span id='box-shadow'>box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );</span>
        <span id='backdrop-filter'>backdrop-filter: blur( {settings.blur}px );</span>
        <span id='wk-backdrop-filter'>-webkit-backdrop-filter: blur( {settings.blur}px );</span>          
      </div>
    </div>
  )
}

export default Output
