import Container from '@mui/material/Container';
import BoardContent from './BoardContent/BoardContent';
import BoardBar from './BoardBar/BoardBar';
import AppBar from '~/components/AppBar/AppBar';

function Board() {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}
export default Board;
