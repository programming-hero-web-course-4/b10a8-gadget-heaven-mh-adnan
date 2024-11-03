import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Statistic from '../Pages/StatisticDetails';
import Dashbord from '../Pages/Dashbord';
import ItemsCard from '../components/ItemsCard';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children :[
      {
        path: '/',
        element: <Home/>,
        loader : ()=> fetch('../categories.json'),
        children : [
          {
            path: '/', 
            element: <ItemsCard />,
            loader : ()=> fetch('../coffees.json'),
          },
          {
            path: 'category/:category', 
            element: <ItemsCard />,
            loader : ()=> fetch('../coffees.json'),
          },
        ]
        
      },

      {
        path: '/statistic',
        element: <Statistic/>,
      },

      {
        path: '/dashboard',
        element: <Dashbord />,
      },
    ]
  },
]);

export default routes;




