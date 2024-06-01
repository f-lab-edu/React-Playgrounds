import { createBrowserRouter } from 'react-router-dom';
import Navigator from './Navigator';
import StopWatchPage from './pages/Stopwatch/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigator />,
  },
  {
    path: '/stopwatch',
    element: <StopWatchPage />,
  },
]);
