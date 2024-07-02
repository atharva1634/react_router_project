import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/contactUs/Contact.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github, { githubData } from './components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "About",
        element: <About></About>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        loader:   githubData  ,
        path: "github",
        element: <Github></Github>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
