import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SettingsContext = createContext();
const SettingContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const settings = {
    setMode,
    mode
  };
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};
SettingContextProvider.propTypes = {
  children: PropTypes.any
};
export default SettingContextProvider;
