import Box from '@mui/material/Box';

export default function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) =>
          `calc(100vh - (${theme.custom.appBarHeight} + ${theme.custom.boardBarHeight}))`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Board Content
    </Box>
  );
}
