import React from 'react';
import {NavLink} from 'react-router-dom';


export const About = () =>(
	<div className="jumbotron jumbotron-fluid">
  		<div className="container">
    		<h1 className="display-4">Simply Note</h1>
    		<p className="lead">This React App use only hooc inside.</p>
    		 <NavLink className="btn btn-primary btn-lg" to="/" role="button">Author</NavLink>
  		</div>
	</div>
)
