import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
//import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import AddMed from "./components/AddMed";
import Med from "./components/Med";
import MedsList from "./components/MedsList";
import './css/as2_css.css';


function App() {
  return (
    <div>
    <div id="top_nav">
	<nav>
		<a href="index.html">
		<Link to={"/meds"} className="nav-link">
		Home </Link></a> |  
<div class="dropdown">
  <span><a href="admin.html">Admin</a></span>
  <div class="dropdown-content">
    <p><a href="#">
     <Link to={"/Add new"} className="nav-link">
 			 Add new
 			 </Link></a></p>
    
    <p><a href="admin.html">Edit/delete</a></p>
  </div>
</div>

	</nav>
</div>
    
    
     
<div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/meds"]} component={MedsList} />
          <Route exact path={["/meds","/Add new"]} component={AddMed} />
          <Route path="/meds/:id" component={Med} />
        </Switch>
      </div>
      
    </div>
    
  );
}

export default App;