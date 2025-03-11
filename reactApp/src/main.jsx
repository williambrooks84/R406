import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Store, {loader as storeLoader} from './routes/store.jsx';
import OurTeams, {loader as teamsLoader} from './routes/ourteams.jsx';

import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'buy',
        element: <Store />,
        loader: storeLoader
      },
      {
        path: 'team/:teamName',
        element: <OurTeams />,
        loader: teamsLoader
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
