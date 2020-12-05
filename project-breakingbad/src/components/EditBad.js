//edit  med 

import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 class EditBad extends Component {
 constructor(props) {
 super(props);
 this.state = {
  name: '',
  status :'',
  portrayed: '',
  nickname:'',
  img:''
 }
 this.onChangename = this.onChangename.bind(this);
 this.onChangestatus = this.onChangestatus.bind(this);
 this.onChangeportrayed = this.onChangeportrayed.bind(this);
 this.onChangenickname = this.onChangenickname.bind(this);
 }
 
 
 componentDidMount = () => {
 this.getBadById();
 }
 
 getBadById() {
 axios.get('http://localhost:5000/' + this.props.match.params._id)
 .then((response) => {
 this.setState({
  name: response.data.name,
  status: response.data.status,
  portrayed: response.data.portrayed,
  nickname: response.data.nickname,
  img: response.data.img,

 
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
  
 onChangename(e) {
  this.setState({  name: e.target.value })
}

onChangestatus(e) {
  this.setState({ status: e.target.value })
}

onChangeportrayed(e) {
  this.setState({ portrayed: e.target.value })
}

onChangenickname(e) {
  this.setState({ nickname: e.target.value })
}

 
 // To update the record on submit
 handleSubmit = (event) => {
 event.preventDefault();
 const { name, status, portrayed, nickname,img} = this.state;
 axios.post('http://localhost:5000/' + this.props.match.params._id, {
  name: name,
  status: status,
  portrayed: portrayed,
  nickname: nickname,
  img:img
 
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
Name</label>
 <input
id="Company"
 type="text"
 value={this.state.name}
 onChange={this.onChangename}
 className="form-control"
 />
 
 <br />
 <label id="bn">
 Status</label>
 <input
 id="bname"
 type="text"
 value={this.state.status}
 onChange={this.onChangestatus}
 className="form-control"
 />
 
 <br />
 <label id="dn">
 Portrayed </label>
 <input
 id="dname"
 type="text"
 value={this.state.portrayed}
 onChange={this.onChangeportrayed} 
 className="form-control"
 />

<br />
 <label id="ln">
 Nickname </label>
 <input
 id="dname"
 type="text"
 id="lname"
 value={this.state.nickname}
 onChange={this.onChangenickname} 
 className="form-control"
 />
<img id="edtimg"src={this.state.img}></img>
 <br />

 <br />
 <input
 type="submit"
 value="Confirm "
 id="sbs"
 className="btn btn-primary"
 />
 </form>
 </div>
 );
 }
 }
 
 export default EditBad;