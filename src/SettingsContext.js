import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
  const [settings, setSettings] = useState({
    blur: 10,
    transparency: 0.1,
    color: '255, 255, 255',
    outline: true
  });
  
  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {props.children}
    </SettingsContext.Provider>
  )
}