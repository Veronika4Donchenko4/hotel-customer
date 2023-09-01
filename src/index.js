import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './global.css';
import { RouterProvider} from 'react-router';
import { router } from './pages/router';
import Layoud from './components/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layoud>
    <RouterProvider router={router} />
    </Layoud>
  </React.StrictMode>
);

