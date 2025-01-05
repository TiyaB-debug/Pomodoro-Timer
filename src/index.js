import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import './index.css';
import App from './App';
import SettingsContextProvider from './context/SettingsContext';

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>
);

