import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
//import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import AddMed from "./components/AddMed";
import Med from "./components/Med";
import MedsList from "./components/MedsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/meds"} className="nav-link">
              Home
            </Link>
          </li>            
          <li className="nav-item">
        	 <DropdownButton id="dropdown-basic-button" title="Admin">
 			 <Dropdown.Item active href="#/action-1">
 			 <Link to={"/Add new"} className="nav-link">
 			 Add new
 			 </Link>
 			 </Dropdown.Item>
 			 <Dropdown.Item href="#/action-2">Update</Dropdown.Item>
  			 <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
			 </DropdownButton>
		  </li>

        </div>
      </nav>
<div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/meds"]} component={MedsList} />
          <Route exact path="/Add new" component={AddMed} />
          <Route path="/meds/:id" component={Med} />
        </Switch>
      </div>
      
    </div>
  );
}

export default App;