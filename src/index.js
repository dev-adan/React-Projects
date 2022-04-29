import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Projects/Navbar/App'
// import App from './Projects/Sidebar and model/App';
// import App from './Projects/Stripe/App';
// import App from './Projects/Cart/App';
// import { AppProvider } from './Projects/Cart/context';
// import { AppProvider } from './Projects/Cocktail/context'; 
// import { AppProvider } from './Api Projects/moviedb/context'; 
import { AppProvider } from './Api Projects/HackerNews/context'; 
// import App from './Projects/Router/App';
// import App from './Projects/Axios/App';
// import App from './Projects/Cocktail/App';
// import App from './Api/RandomPerson/App';
// import App from './Api Projects/StockPhoto/App';
// import App from './Api Projects/moviedb/App';
import App from './Api Projects/HackerNews/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <AppProvider>
        <App />
     </AppProvider>  
);

