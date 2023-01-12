import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Habit from './page/Habit';
import Unhabit from './page/Unhabit';
import Home from './page/Dashboard';
import Routine from './page/Routine';
import Task from './page/Task';
import HabitDetail from './component/HabitDetail';
import NewHabit from './page/NewHabit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'habit',
        element: <Habit />,
      },
      {
        path: '/habit/create',
        element: <NewHabit />,
      },
      { path: 'habit/:habitId', element: <HabitDetail /> },
      {
        path: 'unhabit',
        element: <Unhabit />,
      },
      { path: 'routine', element: <Routine /> },
      { path: 'task', element: <Task /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
