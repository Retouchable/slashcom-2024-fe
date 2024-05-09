import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './input.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import MainMenu from './Pages/MainMenu'
import HomePage from './Pages/HomePage'
import DetailInvestPage from './Pages/DetailInvestPage';
import StartUpInformationPage from './Pages/StartUpInformationPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/mainMenu',
    element: <MainMenu />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/detailInvestmentPage',
    element: <DetailInvestPage />
  },
  {
    path: '/startupInformationPage',
    element: <StartUpInformationPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
