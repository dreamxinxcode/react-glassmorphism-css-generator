import React, { useContext, useEffect } from 'react'
import './Glass.scss';
import { SettingsContext } from '../../SettingsContext';

function Glass() {
  const [settings, setSettings] = useContext(SettingsContext);


  useEffect(() => {
    const glass = document.getElementById('glass');
    glass.style.background = `rgba(255, 255, 255, ${settings.transparency})`;
    glass.style.backdropFilter = `blur(${settings.blur}px)`;
    glass.style.webkitBackdropFilter = `blur(${settings.blur}px)`;
  }, [settings])


  return (
    <div id='glass-container'>
      <span>Glass</span>
      <div id="glass"></div>
    </div>
  )
}

export default Glass
