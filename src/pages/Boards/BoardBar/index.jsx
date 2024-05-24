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

function BoardBar() {
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
        borderBottom: '1px solid #fff',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label='ManhTienDev DATN K64'
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
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
              src='https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/438237556_343870718700613_5830718982797006330_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HyJW8GYnTcgQ7kNvgEkf7xf&_nc_ht=scontent.fhan18-1.fna&oh=03_Q7cD1QG0N5bBPKz5Ur7O365JOchToHgYYp8aXA72bOM9I7Vu-A&oe=6677A960'
            />
          </Tooltip>
          <Tooltip title='Tú Bitch'>
            <Avatar
              alt='Tú Bitch'
              src='https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/438171644_1722731884932278_3707006569422968255_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kn3VzexF6pEQ7kNvgGO3owe&_nc_ht=scontent.fhan18-1.fna&oh=03_Q7cD1QEJ362rMme6h7wbrfvYxLVUNqffiz-769cbWgPOoM1icA&oe=6677C7F5'
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
              src='https://scontent.fhan18-1.fna.fbcdn.net/v/t1.15752-9/393462502_882082896963046_6363240089627374385_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZVaoou7lW3EQ7kNvgGl7NzL&_nc_ht=scontent.fhan18-1.fna&oh=03_Q7cD1QHao_gJwP3LhTZqyvI-_olhmDCh3cMs4eeX7tEVmZTdvg&oe=66779F73'
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
