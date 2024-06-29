import { Box, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import { IconBoard, IconHome, IconLogout, IconTemplate } from '~/components/icons';

const sideBarLinks = [
  {
    icon: <IconBoard></IconBoard>,
    title: 'Boards',
    url: '/boards',
  },
  {
    icon: <IconTemplate></IconTemplate>,
    title: 'Template',
    url: '/template',
  },
  {
    icon: <IconHome></IconHome>,
    title: 'Home',
    url: '/',
  },
  {
    icon: <IconLogout></IconLogout>,
    title: 'Logout',
    url: '/logout',
  },
];

const DashboardSidebar = () => {
  const navLinkClass =
    'flex items-center px-4 text-left text-sm font-medium gap-x-3 w-full h-9 rounded-lg mb-2 last:mt-auto hover:bg-gray-400';
  return (
    <div className='flex-shrink-0 -ml-[14px] w-[288px] flex flex-col text-sm rounded-xl py-4'>
      {sideBarLinks.map((link) => {
        if (link.url === '/logout') {
          return (
            <button
              key={v4()}
              onClick={() => {
                // dispatch(authLogOut())
              }}
              className={navLinkClass}
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={v4()}
            className={({ isActive }) =>
              isActive ? `${navLinkClass} bg-primary text-primary bg-opacity-10` : `${navLinkClass}`
            }
          >
            <span>{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        );
      })}
      <Box className='px-4 py-3 border-t'>
        <h1 className='mb-4 text-xs font-semibold'>Workspaces</h1>
        <div className='flex items-center gap-x-3'>
          <div className='flex items-center justify-center w-6 h-6 text-base text-white rounded-md bg-primary'>
            <span className='text-sm'>T</span>
          </div>
          <p className='text-sm font-medium'>Trello Workspaces</p>
        </div>
      </Box>
    </div>
  );
};

export default DashboardSidebar;
