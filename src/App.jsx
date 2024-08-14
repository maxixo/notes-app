import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from '../src/components/AddTask';
import ListTask from '../src/components/ListTask';
import './style.css';

const App = () => {
    return (
      // Wrap the app in a provider to listen for changes
        <Provider store={store}>
            <div>
                <h1>Todo List</h1>
                <AddTask />
                <ListTask />
            </div>
        </Provider>
    );
};

export default App;
