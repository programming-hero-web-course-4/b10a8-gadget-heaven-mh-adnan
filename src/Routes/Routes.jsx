import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails'; 
import Dashbord from '../Pages/Dashbord';
import ItemsCard from '../components/ItemsCard';
import Whitelist from '../Pages/Whitelist'
import AddToCart from '../Pages/AddToCart'
import Statistic from '../Pages/Statistic';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ItemsCard />,
            loader: () => fetch('../items.json'),
          },
          {
            path: 'category/:category',
            element: <ItemsCard />,
            loader: () => fetch('../items.json'),
          },
          {
            path: 'product/:id', 
            element: <ProductDetails />,
            loader: () => fetch('../items.json'),
          },
          
        ],
      },
      {
        path: '/dashboard',
        element: <Dashbord />,
        loader: () => fetch('../items.json'),
      },
      {
        path: '/statistic',
        element: <Statistic/>,
        loader: () => fetch('../items.json'),
      },

      {
        path: '/whitelist',
        element: <Whitelist/>,
        loader: () => fetch('../items.json'),
      },
      {
        path: '/cart',
        element: <AddToCart/>,
        loader: () => fetch('../items.json'),
      },
      
      


    
    ],
  },
]);

export default routes;















