import { createBrowserRouter } from 'react-router-dom';
import Navigator from './Navigator';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigator />,
  },
]);
