import { createSlice } from '@reduxjs/toolkit';

// create a slice
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    //add reducer functions
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                description: action.payload,
                isDone: false,
            };
            state.push(newTask);
        },
        toggleTaskStatus: (state, action) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        editTask: (state, action) => {
            const { id, description } = action.payload;
            const task = state.find((task) => task.id === id);
            if (task) {
                task.description = description;
            }
        },
    },
});

// export actions and reducer
export const { addTask, toggleTaskStatus, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
