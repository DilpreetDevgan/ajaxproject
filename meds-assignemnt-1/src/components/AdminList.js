//admin
import React, { useState, useEffect } from "react";
import MedDataService from "../services/MedsDataService";
import { Link } from "react-router-dom";

const AdminList = () => {
  const [meds, setMeds] = useState([]);
 /* const [currentPlant, setCurrentPlant] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchCName, setSearchCName] = useState("");*/

  useEffect(() => {
    retrieveMeds()
  }, []);
  
    const retrieveMeds = () => {
    MedDataService.getAll()
      .then(response => {
        setMeds(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
   const renderHeader = () => {
        let headerElement = ['Drug Company ', '  Drug Brand Name  ', ' Drug Name  '  ]

        return headerElement.map((key, index) => {
           return <th key={index}>{key}</th>
			})
    }
    
 const renderBody = () => {
        return meds && meds.map(({ id, drugcompany, Drugbrandname, Drugname }) => {
            return (
           
            
                <tr key={id}>
                 		
                    <td>{drugcompany}  </td>
                    		
                    <td>{Drugbrandname} </td>
                  
                    <td>{Drugname} </td>
                    <td><button> Edit</button> </td>
                    <td><button>Delete</button></td>
                </tr>
            )
        })
    }   
 
    return (
        <>
          <h1>List Of Drugs and Manufactureres</h1>
            <table id='med' class="center">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
            
                    {renderBody()}
                </tbody>
               
            </table>
        </>
    )
}   

export default AdminList;