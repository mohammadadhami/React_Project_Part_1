import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login/Login.jsx';
import Slid from './components/Swiper/Slid.jsx';
import Mens from './Products/Mens';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
     
      {
        path: "Slid",
        element: <Slid />,
      },
      {
        path: "Mens",
        element: <Mens />,
      },
      {
        path: "products",
        element: <Mens />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
