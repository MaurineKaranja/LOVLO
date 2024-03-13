import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import SignInGoogle from './pages/signInGoogle'
import Register from './pages/register'
import Login from './pages/login'
import ServiceSelectionPage from './pages/serviceSelectionPage'

import './index.css'

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/signInGoogle",
    element: <SignInGoogle/>,
  },
  {
    path: "/serviceSelectionPage",
    element: <ServiceSelectionPage/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={paths} />
  </React.StrictMode>,
)
