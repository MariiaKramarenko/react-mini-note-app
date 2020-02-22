import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
	<nav className="navbar navbar-dark navbar-expand-large bg-primary">
		<div className="navbar-brand">
			Minimal Note
		</div>
		<ul className="navbar-nav">
        	<li className="nav-item">
        		<NavLink exact className="nav-link" to="/">Main</NavLink>
        	</li>
        	<li className="nav-item">
        		<NavLink exact className="nav-link" to="/about">About</NavLink>
        	</li>
        	<li className="nav-item">
        		<NavLink exact className="nav-link" to="/author">Author</NavLink>
        	</li>
        </ul>
	</nav>

)