import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>    
      </BrowserRouter>  
    </React.StrictMode> 
  );
} else {
  console.error("Root element not found in the document.");
} 


