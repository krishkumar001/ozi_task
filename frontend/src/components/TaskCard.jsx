import { Draggable } from "@hello-pangea/dnd";


export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: 10,
            margin: "10px 0",
            background: "#eee",
            ...provided.draggableProps.style,
          }}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <small>Due: {task.due_date?.slice(0, 10)}</small>
        </div>
      )}
    </Draggable>
  );
}
