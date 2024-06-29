import { Box } from '@mui/material';
import BoardPageOptions from '~/modules/dashboard/BoardPageOptions';

const BoardPage = () => {
  return (
    <div className='py-5'>
      <h1 className='mb-5 text-base font-bold uppercase'>Your workspace</h1>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-x-3'>
          <div className='flex items-center justify-center w-8 h-8 text-base text-white rounded-md bg-primary'>
            <span>T</span>
          </div>
          <p className='text-base font-bold'>Trello Workspaces</p>
        </div>
        <div className='flex items-center justify-center gap-x-2'>
          <BoardPageOptions>Boards</BoardPageOptions>
          <BoardPageOptions>Views</BoardPageOptions>
          <BoardPageOptions>Members</BoardPageOptions>
          <BoardPageOptions>Settings</BoardPageOptions>
        </div>
      </div>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#ffffff'),
        }}
        className='w-[194px] h-[96px] shadow-md'
      >
        <h1 className='p-2 text-sm font-bold'>Title Board</h1>
      </Box>
    </div>
  );
};

export default BoardPage;
