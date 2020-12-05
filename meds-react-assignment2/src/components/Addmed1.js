import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';



export default class CreateMed extends Component {



  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangedrugcompany = this.onChangedrugcompany.bind(this);
    this.onChangeDrugbrandname = this.onChangeDrugbrandname.bind(this);
    this.onChangeDrugname = this.onChangeDrugname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      drugcompany: '',
      Drugbrandname: '',
      Drugname: ''
    }
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

  onSubmit(e) {
    e.preventDefault()

    const MedObject = {
      drugcompany: this.state.drugcompany,
      Drugbrandname: this.state.Drugbrandname,
      Drugname: this.state.Drugname
    };

    axios.post('http://localhost:5000/meds',MedObject)
     
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/');
       
        })

    this.setState({
    drugcompany: '',
      Drugbrandname: '',
      Drugname: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group >
          <Form.Label id="dc"> drugcompany</Form.Label>
          <Form.Control type="text" id="Company" value={this.state.drugcompany} onChange={this.onChangedrugcompany} />
        </Form.Group>

        <Form.Group >
          <Form.Label id="bn"> Drugbrandname</Form.Label>
          <Form.Control  id="bname" type="text" value={this.state.Drugbrandname} onChange={this.onChangeDrugbrandname} />
        </Form.Group>

        <Form.Group >
          <Form.Label id="dn">Drugname</Form.Label>
          <Form.Control type="text"   id="dname" value={this.state.Drugname} onChange={this.onChangeDrugname} />
        </Form.Group>
        <Button variant="danger"  type="button"  id="clr">Clear</Button>

        <Button variant="danger"   type="submit" id="sb">

          Create Med
        </Button>
      </Form>
    </div>);
  }
}
