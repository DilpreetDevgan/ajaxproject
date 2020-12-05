//
import React, { Switch,Route,Component }  from "react";
import MedDataService from "../services/MedsDataService";
import axios from 'axios';
import { Link }  from "react-router-dom";


export default class MedsList extends Component {

  
 

  constructor(props) {
    super(props);

    this.MedTutorials = this.retrieveMeds.bind(this);


    this.state = {
      meds: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveMeds();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }
  setActiveMed(med, index) {
    this.setState({
      currentTutorial: med,
      currentIndex: index

    });
  }
  

  deleteMed(obj,brandname) {
    console.log(obj);
    axios.delete('http://localhost:5000/'+obj ) //delte working but dont know how to specifically delete 
        .then((res) => {
            console.log('Med successfully deleted!'+brandname);
            this.retrieveMeds();
            alert('Med successfully deleted!' + brandname);
        }).catch((error) => {
            console.log(error)
        })
        
}
  retrieveMeds() {
    MedDataService.getAll()
      .then(response => {
        this.setState({
          meds: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }




  render() {
    const { meds, currentMed, currentIndex } = this.state;

    return (
     <div>
        <div class="center">
          <h2>Med List</h2>

          <table className="center">
            <tbody>
            {meds &&
              meds.map((med, index) => (
                <tr
                  className={
                    "centre " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveMed(med, index)}
                  key={index}
                >
                  
           
             <td>{med.drugcompany}</td>
             <td>{med.Drugbrandname}</td>
             <td>{med.Drugname}</td>
          <td> <button   onClick={ () => this.deleteMed(med._id,med.drugcompany)} >Delete</button></td>
              <td><a href={"/edit/" + med._id} className="btn btn-primary">Edit</a></td>
                 

               
                  
                </tr>
              ))}</tbody></table>
              
              
              
              
          
          




        </div>
       
      </div>
    );
  }
}
