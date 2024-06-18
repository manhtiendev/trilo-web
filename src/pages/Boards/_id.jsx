import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import BoardContent from "./BoardContent/BoardContent";
import BoardBar from "./BoardBar/BoardBar";
import AppBar from "~/components/AppBar/AppBar";
// import { mockData } from "~/apis/mock-data";
import {
  createNewCardAPI,
  createNewColumnAPI,
  fetchBoardDetailsAPI,
  updateBoardDetailsAPI,
  updateColumnDetailsAPI,
} from "~/apis";
import { cloneDeep, isEmpty } from "lodash";
import { generatePlaceholderCard } from "~/utils/formatters";
import { mapOrder } from "~/utils/sorts";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function Board() {
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const boardId = "666ba007b0ebd181ae47ac6a";
    fetchBoardDetailsAPI(boardId).then((board) => {
      board.columns = mapOrder(board.columns, board.columnOrderIds, "_id");

      board.columns.forEach((col) => {
        if (isEmpty(col.cards)) {
          col.cards = [generatePlaceholderCard(col)];
          col.cardOrderIds = [generatePlaceholderCard(col)._id];
        } else {
          col.cards = mapOrder(col.cards, col.cardOrderIds, "_id");
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

  const moveColumn = (dndOderedColumns) => {
    const dndOderedColumnsIds = dndOderedColumns.map((c) => c._id);

    const newBoard = cloneDeep(board);
    newBoard.columns = dndOderedColumns;
    newBoard.columnOrderIds = dndOderedColumnsIds;
    setBoard(newBoard);

    updateBoardDetailsAPI(newBoard._id, {
      columnOrderIds: dndOderedColumnsIds,
    });
  };

  const moveCardInColumn = (dndOderedCards, dndOderedCardIds, columnId) => {
    const newBoard = cloneDeep(board);
    const columnDnd = newBoard.columns.find((col) => col._id === columnId);
    if (columnDnd) {
      columnDnd.cards = dndOderedCards;
      columnDnd.cardOrderIds = dndOderedCardIds;
    }
    setBoard(newBoard);

    updateColumnDetailsAPI(columnId, {
      cardOrderIds: dndOderedCardIds,
    });
  };

  if (!board) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress></CircularProgress>
        <Typography>Loading board...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumn={moveColumn}
        moveCardInColumn={moveCardInColumn}
      />
    </Container>
  );
}
export default Board;
