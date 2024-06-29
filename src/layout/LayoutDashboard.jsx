import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '~/components/AppBar/AppBar';
import DashboardSidebar from '~/modules/dashboard/DashboardSidebar';

const LayoutDashboard = () => {
  return (
    <Box>
      <div className='fixed z-10 w-full'>
        <AppBar></AppBar>
      </div>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ffffff'),
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: '58px',
        }}
      >
        <div className='flex flex-row gap-x-8 items-start px-[100px] py-7 w-full max-w-[1300px] mx-auto'>
          <DashboardSidebar />
          <div className='flex-1 p-4'>
            <Outlet></Outlet>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default LayoutDashboard;
