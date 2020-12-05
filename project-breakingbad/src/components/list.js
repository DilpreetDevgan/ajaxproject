//
import React, { Switch,Route,Component }  from "react";
import BadDataService from "../services/BadsDataService";
import axios from 'axios';
import { Link }  from "react-router-dom";


export default class BreakingBadList extends Component {

 

  constructor(props) {
    super(props);

    this.retrieveBads = this.retrieveBads.bind(this);


    this.state = {
      bads: [],
      currentBad: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveBads();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }
  setActiveTutorial(bads, index) {
    this.setState({
      currentTutorial: bads,
      currentIndex: index

    });
  }
  

  deleteBads(obj,name) {
    console.log(obj);
    axios.delete('http://localhost:5000/'+obj ) //delte working but dont know how to specifically delete 
        .then((res) => {
            console.log('Med successfully deleted!'+name);
            this.retrieveBads();
            alert('Med successfully deleted!' + name);
        }).catch((error) => {
            console.log(error)
        })
        
}
  retrieveBads() {
    BadDataService.getAll()
      .then(response => {
        this.setState({
          bads: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }




  render() {
    const {  bads, currentBads, currentIndex } = this.state;

    return (
     <div>
        <div class="center">
          <h2>List of Character in Breaking Bad </h2>

          <table className="center">
            <tbody>
            {bads &&
              bads.map((bad, index) => (
                <tr
                  className={
                    "centre " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(bad, index)}
                  key={index}
                >
                  
           
             <td>{bad.name}</td>
             <td>{bad.status}</td>
             <td>{bad.portrayed}</td>
             <td>{bad.nickname}</td>

          <td> <button   onClick={ () => this.deleteBads(bad._id,bad.name)} >Delete</button></td>
              <td><a href={"/edit/" + bad._id} className="btn btn-primary">Edit</a></td>
                 

               
                  
                </tr>
              ))}</tbody></table>
              
              
              
              
          
          




        </div>
       
      </div>
    );
  }
}
//{ () => this.deleteStudent(currentTutorial._id) }