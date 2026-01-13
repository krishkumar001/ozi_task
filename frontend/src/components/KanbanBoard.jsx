import { DragDropContext } from "@hello-pangea/dnd";
import Column from "./Column";
import api from "../services/api";

export default function KanbanBoard({ tasks, setTasks }) {
  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;

    await api.put(`/tasks/${draggableId}`, {
      status: destination.droppableId,
    });

    setTasks(tasks.map(task =>
      task._id === draggableId
        ? { ...task, status: destination.droppableId }
        : task
    ));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: 20 }}>
        {["pending", "in-progress", "completed"].map(status => (
          <Column
            key={status}
            status={status}
            tasks={tasks.filter(t => t.status === status)}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
