import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';



export default class CreateBad extends Component {



  constructor(props) {
    super(props)
//name, status, portrayed,img,nickname
    // Setting up functions
    this.onChangename = this.onChangename.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangeportrayed = this.onChangeportrayed.bind(this);
    this.onChangenickname = this.onChangenickname.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      status :'',
      portrayed: '',
      nickname:'',
      img:''
    }
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
  onChangeimg(e) {
    this.setState({ img: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const BadObject = {
      name: this.state.name,
      status: this.state.status,
      portrayed: this.state.portrayed,
      nickname: this.state.nickname,
      img:this.state.img
    };

    axios.post('http://localhost:5000/bads',BadObject)
     
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/');
       
        })

    this.setState({
      name: '',
      status :'',
      portrayed: '',
      nickname:'',
      img:''

    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <h1>Add More Characters U want </h1>
        <Form.Group >
          <Form.Label id="dc"> Name</Form.Label>
          <Form.Control type="text" className="AddCharacter_Input" id="Company" value={this.state.name} onChange={this.onChangename} />
        </Form.Group>

        <Form.Group >
          <Form.Label id="bn">Status</Form.Label>
          <Form.Control  id="bname" className="AddCharacter_Input" type="text" value={this.state.status} onChange={this.onChangestatus} />
        </Form.Group>

        <Form.Group >
          <Form.Label id="dn">Portrayed</Form.Label>
          <Form.Control type="text" className="AddCharacter_Input"   id="dname" value={this.state.portrayed} onChange={this.onChangeportrayed} />
        </Form.Group>

        <Form.Group >
          <Form.Label  id="ln">Nickname</Form.Label>
          <Form.Control type="text" className="AddCharacter_Input"  id="lname"  onChange={this.onChangenickname}  value={this.state.nickname} />
        </Form.Group>
        <Form.Group >
          <Form.Label id="imgs" >Photo</Form.Label>
          <Form.Control id="imginput" type="text"  className="AddCharacter_Input"   onChange={this.onChangeimg}  value={this.state.img} />
        </Form.Group>


        <Button variant="danger"  className ="CreateCharacterButton_ID" type="submit" id="sb">

          Create 
        </Button>
      </Form>
    </div>);
  }
}
