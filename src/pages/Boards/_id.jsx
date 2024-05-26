import Container from '@mui/material/Container';
import BoardContent from './BoardContent/BoardContent';
import BoardBar from './BoardBar/BoardBar';
import AppBar from '~/components/AppBar/AppBar';
import { mockData } from '~/apis/mock-data';

function Board() {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  );
}
export default Board;
