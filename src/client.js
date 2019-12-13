
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Hello from "./components/Hello";
import createStore from "./store";

const store = createStore( window.REDUX_DATA );

const jsx = (
   <ReduxProvider store={ store }>
       <Router>
           <Hello />
       </Router>
   </ReduxProvider>
);

const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );
