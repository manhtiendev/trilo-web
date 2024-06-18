import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";
import { toast } from "react-toastify";

function ListColumns({ columns, createNewColumn, createNewCard }) {
  const [openNewColumn, setOpenNewColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const toggleOpenNewColumn = () => {
    setOpenNewColumn(!openNewColumn);
  };

  const addNewColumn = async () => {
    if (!newColumnTitle) {
      toast.error("Please enter Column Title!", {
        position: "bottom-left",
        theme: "colored",
        autoClose: 2000,
      });
      return;
    }

    // Call API
    const newColumnData = {
      title: newColumnTitle,
    };
    createNewColumn(newColumnData);

    toggleOpenNewColumn();
    setNewColumnTitle("");
  };

  return (
    <SortableContext
      items={columns?.map((col) => col._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": {
            m: 2,
          },
        }}
      >
        {columns?.map((column) => (
          <Column key={column._id} column={column} createNewCard={createNewCard} />
        ))}

        {/* Button Add Column */}
        {!openNewColumn ? (
          <Box
            onClick={toggleOpenNewColumn}
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
              mx: 2,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
              "&:hover": {
                opacity: 0.8,
              },
              transition: "0.2s",
            }}
          >
            <Button
              sx={{
                color: "#fff",
                width: "100%",
                justifyContent: "flex-start",
                pl: 2.5,
                py: 1,
              }}
              startIcon={<NoteAddIcon />}
            >
              Add new column
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              maxWidth: "250px",
              minWidth: "250px",
              mx: 2,
              p: 1,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              transition: "0.2s",
            }}
          >
            <TextField
              label="Enter column title..."
              type="text"
              size="small"
              variant="outlined"
              autoFocus
              value={newColumnTitle}
              onChange={(e) => {
                setNewColumnTitle(e.target.value);
              }}
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "#bdc3c7",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Tooltip title="Add new column">
                <Button
                  onClick={addNewColumn}
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{
                    boxShadow: "none",
                    border: "0.5px solid",
                    borderColor: (theme) => theme.palette.success.main,
                    "&:hover": { bgcolor: (theme) => theme.palette.success.main },
                  }}
                >
                  Add Column
                </Button>
              </Tooltip>
              <Tooltip title="Close">
                <CloseIcon
                  fontSize="small"
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    "&:hover": {
                      color: (theme) => theme.palette.success.main,
                    },
                  }}
                  onClick={() => {
                    toggleOpenNewColumn();
                  }}
                />
              </Tooltip>
            </Box>
          </Box>
        )}
      </Box>
    </SortableContext>
  );
}
export default ListColumns;
