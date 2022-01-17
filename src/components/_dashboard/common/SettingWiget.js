import { Icon } from '@iconify/react';
import SettingWigetFill from '@iconify/icons-eva/settings-fill';
import CloseFill from '@iconify/icons-eva/close-outline';
import SunFill from '@iconify/icons-eva/sun-fill';
import MoonFill from '@iconify/icons-eva/moon-fill';
import ElipFill from '@iconify/icons-eva/brush-fill';

// material
import { styled } from '@mui/material/styles';
import { Badge, Drawer, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { SettingsContext } from '../../../contexts/settings';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(100),
  padding: theme.spacing(2),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadiusMd,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 }
}));

// ----------------------------------------------------------------------
function ButtonMode(props) {
  return (
    <div>
      <Box
        onClick={() => props.onClick()}
        sx={{
          backgroundColor: props.title === 'light' ? 'white' : 'black',
          padding: '25px 35px',
          color: props.title === 'light' ? 'black' : 'white',
          borderRadius: '10px',
          boxShadow: 'rgba(52, 128, 235, 0.35) 0px 5px 10px;',
          '&:hover': { opacity: 0.72, boxShadow: 'rgba(52, 128, 235, 0.4) 0px 5px 10px;' },
          transition: '0.25s'
        }}
      >
        <Icon icon={props.icon} width={24} height={24} />
      </Box>
    </div>
  );
}
ButtonMode.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string || PropTypes.any,
  onClick: PropTypes.func
};
ButtonColor.propTypes = {
  color: PropTypes.string
};
function ButtonColor(props) {
  return (
    <Box
      sx={{
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 6px',
        border: '2px solid gray',
        borderRadius: '5px',
        marginBottom: '8px',
        '&:hover': {
          opacity: 0.72,
          borderColor: `${props.color}`,
          backgroundColor: 'rgb(0, 171, 85)'
        },
        transition: '0.2s'
      }}
    >
      <Icon icon={ElipFill} width={24} height={24} color={props.color} />
    </Box>
  );
}
export default function SettingWiget() {
  const [openSetting, setOpenSetting] = useState(false);
  const { setMode } = useContext(SettingsContext);
  const toggleTheme = () => {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <RootStyle onClick={() => setOpenSetting((state) => !state)}>
        <Badge showZero badgeContent={0} color="error" max={99}>
          <Icon icon={SettingWigetFill} width={24} height={24} />
        </Badge>
      </RootStyle>
      <Drawer
        anchor="right"
        open={openSetting}
        onClose={() => setOpenSetting(false)}
        PaperProps={{
          sx: {
            width: 280,
            height: '98%',
            border: 'none',
            overflow: 'hidden',
            borderRadius: '15px',
            margin: '10px',
            marginRight: '15px',
            padding: '15px 10px'
          }
        }}
      >
        <Box
          sx={{
            borderBottom: '1px solid #ccc',
            padding: '15px 10px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h8" style={{ fontWeight: 'bold' }}>
            Settings
          </Typography>
          <Icon icon={CloseFill} width={24} height={24} />
        </Box>
        <Box
          sx={{
            padding: '25px 10px',
            justifyContent: 'space-between'
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Mode</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <ButtonMode title="light" icon={SunFill} onClick={toggleTheme} />
            <ButtonMode title="dark" icon={MoonFill} onClick={toggleTheme} />
          </div>
        </Box>
        <Box
          sx={{
            padding: '25px 10px',
            justifyContent: 'space-between'
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Direction</p>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <ButtonMode title="light" icon={SunFill} />
            <ButtonMode title="dark" icon={MoonFill} />
          </div>
        </Box>
        <Box
          sx={{
            padding: '25px 10px',
            justifyContent: 'space-between'
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Color</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <ButtonColor color="red" />
            <ButtonColor color="blue" />
            <ButtonColor color="green" />
            <ButtonColor color="purple" />
            <ButtonColor color="yellow" />
            <ButtonColor color="brown" />
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
