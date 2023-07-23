import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './app/store';
import { Provider } from 'react-redux';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <React.StrictMode>
         <PersistGate persistor={persistor}>
            <App />
         </PersistGate>
      </React.StrictMode>
   </Provider>)