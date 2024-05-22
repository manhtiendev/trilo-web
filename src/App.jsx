import Button from '@mui/material/Button';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import Box from '@mui/material/Box';

function ModelSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (e) => {
    const selectedMode = e.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='label-select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <LightModeIcon fontSize='small' /> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <DarkModeIcon fontSize='small' />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModelSelect></ModelSelect>
      <hr />
      <div>Manh Tien Dev</div>
      <hr />
      <div>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          ad magnam dolore architecto, consequuntur dicta pariatur. Voluptate
          ipsam aliquam magni quam error quibusdam aperiam saepe nulla,
          consequatur doloremque quae.
        </Typography>
      </div>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>
        <ModeToggle></ModeToggle>
      </Button>
      <br />
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
    </>
  );
}

export default App;
