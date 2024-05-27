import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { capitalizeFirstLetter } from '~/utils/formatters';

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};

function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.custom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        px: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label='Automation'
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label='Filters'
          onClick={() => {}}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Button
          sx={{
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
              borderColor: '#bdc3c7',
            },
          }}
          variant='outlined'
          startIcon={<PersonAddAltIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          sx={{
            gap: '4px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be',
              },
            },
          }}
        >
          <Tooltip title='Mạnh Tiến'>
            <Avatar
              alt='Mạnh Tiến'
              src='https://i.ibb.co/PjCWvwT/t-i-xu-ng.jpg'
            />
          </Tooltip>
          <Tooltip title='Linh Cim'>
            <Avatar
              alt='Linh Cim'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Tú Bitch'>
            <Avatar
              alt='Tú Bitch'
              src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
            />
          </Tooltip>
          <Tooltip title='Cu Liển'>
            <Avatar
              alt='Cu Liển'
              src='https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/441482149_329685523508095_7940665838990172155_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nkG1Yf_KsswQ7kNvgE587mt&_nc_ht=scontent.fhan18-1.fna&oh=03_Q7cD1QFz7AeRDP-fgygP3esgX-sitvDGnUCA93Vh71PDf7aNWw&oe=6677AD86'
            />
          </Tooltip>
          <Tooltip title='Tú Biên'>
            <Avatar
              alt='Tú Biên'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
            />
          </Tooltip>
          <Tooltip title='Members'>
            <Avatar
              alt='Mạnh Tiến'
              src='https://i.ibb.co/PjCWvwT/t-i-xu-ng.jpg'
            />
          </Tooltip>
          <Tooltip title='Members'>
            <Avatar
              alt='Mạnh Tiến'
              src='https://i.ibb.co/PjCWvwT/t-i-xu-ng.jpg'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}
export default BoardBar;
