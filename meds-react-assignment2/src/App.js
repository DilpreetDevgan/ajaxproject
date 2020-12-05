import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
//import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import CreateMed from "./components/Addmed1";

import MedsList from "./components/MedsList";
import EditMed from './components/EditMed';

import './css/as2_css.css';
import MedList from "./components/list";


function App() {
  return (
    <div>
    <div >
	<nav>
		<a href="index.html">
		<Link to={"/meds"} >
		Home </Link></a> |  
<div class="dropdown">
  <span><a href="admin.html">
  <Link  to={"/medsli"}  >
  Admin </Link></a></span>
  <div class="dropdown-content">
    <p><a href="#">
     <Link to={"/create-med"} >
 			 Add new
 			 </Link></a></p>
    
    <p><a href="admin.html"><Link  to={"/medsli"}  >Edit/delete </Link></a></p>
 
  </div>
</div>

	</nav>
</div>

    
     
<div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/meds"]} component={MedsList} />
          <Route exact path={["/", "/medsli"]} component={MedList} />
           <Route path="/create-med" component={CreateMed} />
           <Route path="/edit/:_id" component={EditMed} />
         
        
        </Switch>
      </div>
      
    </div>
    
  );
}

export default App;