import Box from '@mui/material/Box';
import Card from './Card/Card';

function ListCards() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '0 5px',
        m: '0 5px',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.custom.boardContentHeight} 
            - ${theme.spacing(5)} 
            - ${theme.custom.columnHeaderHeight}
            - ${theme.custom.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf',
        },
      }}
    >
      <Card />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
    </Box>
  );
}

export default ListCards;
