import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import BoardContent from "./BoardContent/BoardContent";
import BoardBar from "./BoardBar/BoardBar";
import AppBar from "~/components/AppBar/AppBar";
// import { mockData } from "~/apis/mock-data";
import { createNewCardAPI, createNewColumnAPI, fetchBoardDetailsAPI } from "~/apis";
import { isEmpty } from "lodash";
import { generatePlaceholderCard } from "~/utils/formatters";

function Board() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const boardId = "666ba007b0ebd181ae47ac6a";
    fetchBoardDetailsAPI(boardId).then((board) => {
      board.columns.forEach((col) => {
        if (isEmpty(col.cards)) {
          col.cards = [generatePlaceholderCard(col)];
          col.cardOrderIds = [generatePlaceholderCard(col)._id];
        }
      });
      setBoard(board);
    });
  }, []);

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({ ...newColumnData, boardId: board._id });

    createdColumn.cards = [generatePlaceholderCard(createdColumn)];
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id];

    const newBoard = { ...board };
    newBoard.columns.push(createdColumn);
    newBoard.columnOrderIds.push(createdColumn._id);
    setBoard(newBoard);
  };

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({ ...newCardData, boardId: board._id });

    const newBoard = { ...board };
    const colToUpdate = newBoard.columns.find((col) => col._id === createdCard.columnId);
    if (colToUpdate) {
      colToUpdate.cards.push(createdCard);
      colToUpdate.cardOrderIds.push(createdCard._id);
    }
    setBoard(newBoard);
  };

  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} createNewColumn={createNewColumn} createNewCard={createNewCard} />
    </Container>
  );
}
export default Board;
