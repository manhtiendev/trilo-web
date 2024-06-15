import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import BoardContent from "./BoardContent/BoardContent";
import BoardBar from "./BoardBar/BoardBar";
import AppBar from "~/components/AppBar/AppBar";
import { mockData } from "~/apis/mock-data";
import { fetchBoardDetailsAPI } from "~/apis";

function Board() {
  // const [board, setBoard] = useState(null);

  // useEffect(() => {
  //   const boardId = '666ba007b0ebd181ae47ac6a';
  //   fetchBoardDetailsAPI(boardId).then((board) => {
  //     setBoard(board);
  //   });
  // }, []);

  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  );
}
export default Board;
