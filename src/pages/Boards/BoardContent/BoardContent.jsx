import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
export default function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.custom.boardContentHeight,
        p: '10px 0',
      }}
    >
      <ListColumns />
    </Box>
  );
}
