import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app';
import { Provider } from 'react-redux';
// import { store} from '../src/store/index';
import  './fareBase'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
   
            // <Provider store={store}>
            //     <AppRouter />
            // </Provider>
           
             <Provider >
                <AppRouter />
             </Provider>
           

   
  
);


