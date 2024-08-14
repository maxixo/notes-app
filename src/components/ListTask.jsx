import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../components/Task';


// ListTask component to display all tasks and filter them based on isDone state.

const ListTask = () => {
    const [filter, setFilter] = useState('all');
    const tasks = useSelector((state) => state.tasks);

    // Filter tasks based on isDone state (all, done, not done) and update the state accordingly.
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') return task.isDone;
        if (filter === 'not') return !task.isDone;
        return true;
    });

    return (
        <div>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('done')}>Done</button>
                <button onClick={() => setFilter('not')}>Not Done</button>
            </div>
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
