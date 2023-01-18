import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Habit from './page/habit/Habit';
import Unhabit from './page/Unhabit';
import Home from './page/Dashboard';
import Routine from './page/Routine';
import Task from './page/Task';
import RootLayout from './component/RootLayout';
import NewHabit from './page/habit/NewHabit';
import HabitDetail from './page/habit/HabitDetail';
import HabitList from './page/habit/HabitList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='habit' element={<Habit />}>
        <Route path='/habit' element={<HabitList />} />
        <Route path='create' element={<NewHabit />} />
        <Route path=':habitId' element={<HabitDetail />} />
      </Route>

      <Route path='unhabit' element={<Unhabit />} />
      <Route path='routine' element={<Routine />} />
      <Route path='task' element={<Task />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
