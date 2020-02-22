import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home.js";
import {About} from "./pages/About.js";
import {Navbar} from "./components/Navbar";
import {Author} from "./pages/Author";
import {Alert} from "./components/Alert";
import {AlertState} from './context/alert/AlertState';


function App() {
  return (
    <AlertState>
  		<BrowserRouter>
  		  	<Navbar/>
  	    	<div className="container pt-4">
          <Alert alert={alert} />  	   
           		<Route path={'/'} exact component={Home} />
           		<Route path={'/about'} component={About} />
           		<Route path={'/author'} component={Author} />                 
        	</div>
    	</BrowserRouter>
      </AlertState>
  );
}

export default App;
