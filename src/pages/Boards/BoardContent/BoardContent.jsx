import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '~/utils/arrayMove';
// import { arrayMove } from '@dnd-kit/sortable';

export default function BoardContent({ board }) {
  const [orderedColumns, setorderedColumns] = useState([]);

  useEffect(() => {
    setorderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
  }, [board]);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

      setorderedColumns(arrayMove(orderedColumns, oldIndex, newIndex));
    }
  };

  // Sensor

  // If using the default PointerSensor,
  // must incorporate CSS touch-action: 'none' in the drag and drop element(Columns)

  // const pointerSensor = useSensor(PointerSensor, {
  //   // Require the mouse to move by 10 pixels before activating
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });

  // const sensors = useSensors(pointerSensor);

  //PointerSensor bug on mobile, use MouseSensor & TouchSensor

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Hold 250ms and
    activationConstraint: {
      delay: 250,
      tolerance: 500,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: (theme) => theme.custom.boardContentHeight,
          p: '10px 0',
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}
