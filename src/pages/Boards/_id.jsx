import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import BoardContent from "./BoardContent/BoardContent";
import BoardBar from "./BoardBar/BoardBar";
import AppBar from "~/components/AppBar/AppBar";
import { mockData } from "~/apis/mock-data";
import { fetchBoardDetailsAPI } from "~/apis";

function Board() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const boardId = "66666fdd14e9706dd1eb15a9";
    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board);
    });
  }, []);

  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  );
}
export default Board;
