import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home.js";
import {About} from "./pages/About.js";
import {Navbar} from "./components/Navbar";

function App() {
  return (
  		<BrowserRouter>
  		  	<Navbar/>
  	    	<div className="container pt-4">  	   
           		<Route path={'/'} exact component={Home} />
           		<Route path={'/about'} component={About} />
                 <h1>Test</h1>
                  
        	</div>
    	</BrowserRouter>
  );
}

export default App;
