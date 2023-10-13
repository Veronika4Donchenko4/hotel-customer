import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './global.css';
import { RouterProvider} from 'react-router';
import { router } from './pages/router';
import Loyout from './Layout/Layout'
import {store} from './redux'
import {AuthContextProvider} from './context/AuthContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>

      <Loyout>
        <RouterProvider router={router} />
      </Loyout>
    </AuthContextProvider>

    </Provider>
  </React.StrictMode>
);

