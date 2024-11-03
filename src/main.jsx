// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import routes from './Routes/Routes'
// import App from './App.jsx'
// // import { createBrowserRouter } from 'react-router-dom'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    {/* <RouterProvider router={routes}></RouterProvider> */}
//    <RouterProvider router={Routes}/>
//    {/* <App/> */}
//   </StrictMode>,
// )



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);


