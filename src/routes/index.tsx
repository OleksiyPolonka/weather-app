import { createBrowserRouter } from 'react-router-dom';
import { getCityWeather } from '../api/weather';
import Details from './Details';
import ErrorPage from './ErrorPage';
import Main from './Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Details />,
        path: 'details/:cityId',
        loader: ({ params }) => getCityWeather(params.cityId),
      },
    ],
  },
]);
