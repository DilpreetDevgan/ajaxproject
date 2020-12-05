import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
//import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import BreakingBadList   from "./components/list";
import CreateBad from "./components/AddBad";
//import Med from "./components/Med";
import BadsList from "./components/BadsList";
import EditBad from './components/EditBad';

import './css/BreakinBad.css';
//import TutorialsList from "./components/list";


function App() {
  return (
    <div>
    <div >
	<nav>
		<a href="index.html">
		<Link to={"/bads"} >
		Home </Link></a> |  
<div class="dropdown">
  <span><a href="admin.html">
  <Link  to={"/badslist"}  >
  Admin </Link></a></span>
  <div class="dropdown-content">
    <p><a href="#">
     <Link to={"/bad"} >
 			 Add new
 			 </Link></a></p>
    
    <p><a href="admin.html">Edit/delete</a></p>
 
  </div>
</div>

	</nav>
</div>

    
     
<div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/bads"]} component={BadsList} />
          <Route path="/bad" component={CreateBad} />
          <Route exact path={["/", "/badslist"]} component={BreakingBadList} />
          <Route path="/edit/:_id" component={EditBad} />
        </Switch>
      </div>
      
    </div>
    
  );
}

export default App;
