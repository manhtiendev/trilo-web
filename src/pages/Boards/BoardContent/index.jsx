import Box from '@mui/material/Box';

export default function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
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
