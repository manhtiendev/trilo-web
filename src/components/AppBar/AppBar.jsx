import Box from '@mui/material/Box';
import ModeSelect from '~/components/ModeSelect/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TriloLogo } from '~/assets/trilo.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import logo from '~/assets/trilo.gif';

function AppBar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.custom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        px: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            borderRadius: '4px',
            padding: '6px 4px',
            '&:hover': { bgcolor: 'primary.main' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AppsIcon
            sx={{
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer',
            userSelect: 'none',
            color: 'white',
            '& img': { display: 'none' },
            '&:hover': {
              bgcolor: 'primary.main',
              '& .IconAnimation': {
                display: 'block',
              },
              '& .MuiSvgIcon-root': {
                display: 'none',
              },
            },
            padding: '4px',
            borderRadius: '4px',
          }}
        >
          <SvgIcon
            component={TriloLogo}
            inheritViewBox
            sx={{
              color: 'white',
              fontSize: '20px',
            }}
          />
          <img
            className='IconAnimation'
            style={{ borderRadius: '4px' }}
            src={logo}
            alt='IconApp'
            width='20px'
            height='20px'
          />
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'white',
            }}
            variant='span'
          >
            Trilo
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{ color: 'white', '&:hover': { bgcolor: 'primary.main' } }}
            startIcon={<LibraryAddIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <TextField
          id='outlined-search'
          label='Search...'
          type='text'
          size='small'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: searchValue && (
              <InputAdornment position='end'>
                <CloseIcon
                  fontSize='small'
                  sx={{ color: 'white', cursor: 'pointer' }}
                  onClick={() => {
                    setSearchValue('');
                  }}
                />{' '}
              </InputAdornment>
            ),
          }}
          sx={{
            minWidth: 120,
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: '#bdc3c7',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title='Notifications'>
          <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon
              sx={{ color: 'white', '&:hover': { color: '#bdc3c7' } }}
            />
          </Badge>
        </Tooltip>
        <Tooltip title='Information'>
          <HelpOutlineIcon
            sx={{
              cursor: 'pointer',
              color: 'white',
              '&:hover': { color: '#bdc3c7' },
            }}
          />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
