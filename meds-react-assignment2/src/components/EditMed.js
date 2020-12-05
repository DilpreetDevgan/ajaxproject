//edit  med 

import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class EditMed extends Component {
 constructor(props) {
 super(props);
 this.state = {
 drugcompany: '',
 Drugbrandname: '',
 Drugname: ''
 }
 this.onChangedrugcompany = this.onChangedrugcompany.bind(this);
 this.onChangeDrugbrandname = this.onChangeDrugbrandname.bind(this);
 this.onChangeDrugname = this.onChangeDrugname.bind(this);
 }
 
 
 componentDidMount = () => {
 this.getMedById();
 }
 
 // To get employee based on ID
 getMedById() {
 axios.get('http://localhost:5000/' + this.props.match.params._id)
 .then((response) => {
 this.setState({
    drugcompany: response.data.drugcompany,
    Drugbrandname: response.data.Drugbrandname,
    Drugname: response.data.Drugname,
 
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
  
 onChangedrugcompany(e) {
    this.setState({ drugcompany: e.target.value })
  }

  onChangeDrugbrandname(e) {
    this.setState({ Drugbrandname: e.target.value })
  }

  onChangeDrugname(e) {
    this.setState({ Drugname: e.target.value })
  }
 
 // To update the record on submit
 handleSubmit = (event) => {
 event.preventDefault();
 const { drugcompany, Drugbrandname, Drugname} = this.state;
 axios.post('http://localhost:5000/' + this.props.match.params._id, {
 drugcompany: drugcompany,
 Drugbrandname: Drugbrandname,
 Drugname: Drugname,
 
 })
 .then((response) => {
 console.log(response);
 alert("successfully updated");
 this.props.history.push('/');

 })
 .catch((error) => {
 console.log(error);
 });
 
 }
 
 
 render() {
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit}>
 <label id="dc">
drugname</label>
 <input
id="Company"
 type="text"
 value={this.state.drugcompany}
 onChange={this.onChangedrugcompany}
 className="form-control"
 />
 
 <br />
 <label id="bn">
 Drugbrandname</label>
 <input
 id="bname"
 type="text"
 value={this.state.Drugbrandname}
 onChange={this.onChangeDrugbrandname}
 className="form-control"
 />
 
 <br />
 <label id="dn">
drugcompany </label>
 <input
 id="dname"
 type="text"
 value={this.state.Drugname}
 onChange={this.onChangeDrugname} 
 className="form-control"
 />

 <br />

 <br />
 <input
 type="submit"
 value="submit"
 id="sb"
 className="btn btn-primary"
 />
 </form>
 </div>
 );
 }
 }
 
 export default EditMed;