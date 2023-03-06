import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Career from './Career';
import Blog from './Blog';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './ResponsiveAppBar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveAppBar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="routerContainer">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
