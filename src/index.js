import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './global.css';
import { RouterProvider} from 'react-router';
<<<<<<< Updated upstream
import { router } from './pages/router';
=======
import { router } from './screens/router';
import Loyout from './Layout/Layout'
import {store} from './redux'
import {AuthContextProvider} from './context/AuthContext'
>>>>>>> Stashed changes


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
<<<<<<< Updated upstream
    <RouterProvider router={router} />
    
=======
    <Provider store={store}>
    <AuthContextProvider>

      <Loyout>
        <RouterProvider router={router} />
      </Loyout>
    </AuthContextProvider>

    </Provider>
>>>>>>> Stashed changes
  </React.StrictMode>
);

