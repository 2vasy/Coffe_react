import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import OurCoffe from './pages/OurCoffe/OurCoffe';
import Pleasure from './pages/Pleasure/Pleasure';

const ROUTES = {
  HOME_PAGE:'/',
  OURCOFFE:'/ourcoffe',
  PLEASURE:'/pleasure',
}

const router = createBrowserRouter([
  {
    path:ROUTES.HOME_PAGE,
    index:true,
    element:<HomePage/>,
    errorElement:<NotFound/>,
  },
  {
    path:ROUTES.OURCOFFE,
    element:<OurCoffe/>,
  },
  {
    path:ROUTES.PLEASURE,
    element:<Pleasure/>,
  },
]);

const Routes = function Routes() {
  return <RouterProvider router = {router}/>;
}

export default Routes;