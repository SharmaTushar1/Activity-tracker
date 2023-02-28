import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';
import ToDoPage from './components/ToDoPage';
import InProgressPage from './components/InProgressPage';
import CompletedPage from './components/CompletedPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/toDo",
    element: <ToDoPage />,
  }, 
  {
    path: "/inProgress",
    element: <InProgressPage />,
  },
  {
    path: "/completed",
    element: <CompletedPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
