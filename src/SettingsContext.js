import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
  const [settings, setSettings] = useState({
    blur: 8.0,
    transparency: 0.1,
    outline: true
  });
  
  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {props.children}
    </SettingsContext.Provider>
  )
}