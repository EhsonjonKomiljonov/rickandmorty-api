import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { CharacterInfo } from './pages/CharacterInfo/CharacterInfo';
import { Characters } from './pages/Characters/Characters.jsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/',
        element: <Characters />,
        errorElement: (
          <h1 className="text-danger text-center display-4">Error !!!</h1>
        ),
      },
      {
        path: '/characters/:id',
        element: <CharacterInfo />,
      },
    ],
  },
]);
