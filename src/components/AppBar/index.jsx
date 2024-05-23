import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect';

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.custom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ModeSelect></ModeSelect>
    </Box>
  );
}

export default AppBar;
