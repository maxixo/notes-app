import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Create a Redux store instance with our reducers.
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;

