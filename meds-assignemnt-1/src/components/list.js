//
import React, { Switch,Route,Component }  from "react";
import MedDataService from "../services/MedsDataService";
import axios from 'axios';
import { Link }  from "react-router-dom";


export default class TutorialsList extends Component {

  
 

  constructor(props) {
    super(props);

    this.retrieveTutorials = this.retrieveTutorials.bind(this);


    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }
  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index

    });
  }
  

  deleteStudent(obj,brandname) {
    console.log(obj);
    axios.delete('http://localhost:5000/'+obj ) //delte working but dont know how to specifically delete 
        .then((res) => {
            console.log('Med successfully deleted!'+brandname);
            this.retrieveTutorials();
            alert('Med successfully deleted!' + brandname);
        }).catch((error) => {
            console.log(error)
        })
        
}
  retrieveTutorials() {
    MedDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }




  render() {
    const {  tutorials, currentTutorial, currentIndex } = this.state;

    return (
     <div>
        <div class="center">
          <h2>Med List</h2>

          <table className="center">
            <tbody>
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <tr
                  className={
                    "centre " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  
           
             <td>{tutorial.drugcompany}</td>
             <td>{tutorial.Drugbrandname}</td>
             <td>{tutorial.Drugname}</td>
          <td> <button   onClick={ () => this.deleteStudent(tutorial._id,tutorial.drugcompany)} >Delete</button></td>
              <td><a href={"/edit/" + tutorial._id} className="btn btn-primary">Edit</a></td>
                 

               
                  
                </tr>
              ))}</tbody></table>
              
              
              
              
          
          




        </div>
       
      </div>
    );
  }
}
//{ () => this.deleteStudent(currentTutorial._id) }