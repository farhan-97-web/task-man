import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
    }, []);

    const onDragEnd = async (result) => {
        if (!result.destination) return;
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(result.source.index, 1);
        movedTask.category = result.destination.droppableId;
        updatedTasks.splice(result.destination.index, 0, movedTask);
        setTasks(updatedTasks);

        await axios.put(`http://localhost:5000/tasks/${movedTask._id}`, movedTask);
    };

    return (
        <div>
            <style>{`
                .board-container {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    padding: 20px;
                    flex-wrap: wrap;
                }
                .column {
                    width: 300px;
                    background: #f4f4f4;
                    padding: 10px;
                    border-radius: 8px;
                    min-height: 200px;
                }
                .task {
                    background: white;
                    padding: 10px;
                    border-radius: 5px;
                    margin-bottom: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    cursor: grab;
                }
                h2 {
                    text-align: center;
                    margin-bottom: 10px;
                    font-size: 18px;
                }
            `}</style>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="board-container">
                    {["To-Do", "In Progress", "Done"].map((category) => (
                        <Droppable key={category} droppableId={category}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="column">
                                    <h2>{category}</h2>
                                    {tasks.filter(t => t.category === category).map((task, index) => (
                                        <Draggable key={task._id} draggableId={task._id} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="task">
                                                    {task.title}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
};

export default TaskBoard;
