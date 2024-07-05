import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import OurCoffe from './pages/OurCoffe/OurCoffe';
import Pleasure from './pages/Pleasure/Pleasure';
import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

const ROUTES = {
  LAYOUT:'/',
  OURCOFFE:'ourcoffe',
  PLEASURE:'pleasure',
  
}

const router = createBrowserRouter([
  {
    path:ROUTES.LAYOUT,
    element: <Layout/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:ROUTES.LAYOUT,
        element:<HomePage/>,
      },
      {
        path:ROUTES.OURCOFFE,
        element:<OurCoffe/>,
      },
      {
        path:ROUTES.PLEASURE,
        element:<Pleasure/>,
      },
    ]
  },
]);

const Routes = function Routes() {
  return <RouterProvider router = {router}/>;
}

export default Routes;