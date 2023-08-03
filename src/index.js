import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './global.css';
import { RouterProvider} from 'react-router';
import { router } from './pages/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

