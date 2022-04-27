import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './tutorials/Navbar/App'
// import App from './tutorials/Sidebar and model/App';
// import App from './tutorials/Stripe/App';
// import App from './tutorials/Cart/App';
// import { AppProvider } from './tutorials/Cart/context';
import { AppProvider } from './tutorials/Cocktail/context';
// import App from './tutorials/Router/App';
// import App from './tutorials/Axios/App';
// import App from './tutorials/Cocktail/App';
// import App from './Api/RandomPerson/App';
import App from './Api/StockPhoto/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AppProvider>
        <App />
     /* </AppProvider>  */
);

