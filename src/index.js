import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './global.css';
import { RouterProvider} from 'react-router';
import { router } from './screens/router';
import Loyout from '../src/components/Layout/Layout'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loyout>
    <RouterProvider router={router} />
    </Loyout>
  </React.StrictMode>
);

