import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTask } from '../store/tasksSlice';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    // edit the state of the task in the store
    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
 // save the state of the task in the store
    const handleSave = () => {
        dispatch(editTask({ id: task.id, description: newDescription }));
        setIsEditing(false);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => dispatch(toggleTaskStatus(task.id))}
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                        {task.description}
                    </span>
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
};

export default Task;
