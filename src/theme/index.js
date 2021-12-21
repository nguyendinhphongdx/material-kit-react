import PropTypes from 'prop-types';
import { useContext, useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { SettingsContext } from '../contexts/settings';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  const { mode } = useContext(SettingsContext);
  const themeOptions = useMemo(
    () => ({
      palette: {
        mode,
        ...palette
      },
      shape,
      typography,
      shadows,
      customShadows
    }),
    [mode]
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  console.log(mode);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
