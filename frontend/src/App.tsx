import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Habit from './app/habit/page/Habit';
import Unhabit from './app/page/Unhabit';
import Home from './app/page/Dashboard';
import Routine from './app/page/Routine';
import Task from './app/page/Task';
import RootLayout from './component/RootLayout';
import NewHabit from './app/habit/page/NewHabit';
import HabitDetail from './app/habit/page/HabitDetail';
import HabitList from './app/habit/component/HabitList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path='habit' element={<Habit />}>
        <Route index path='/habit' element={<HabitList />} />
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
