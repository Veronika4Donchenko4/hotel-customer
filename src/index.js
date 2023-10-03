import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './global.css';
import { RouterProvider} from 'react-router';
import { router } from './screens/router';
import Loyoud from './components/Loyout'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loyoud>
    <RouterProvider router={router} />
    </Loyoud>
  </React.StrictMode>
);

