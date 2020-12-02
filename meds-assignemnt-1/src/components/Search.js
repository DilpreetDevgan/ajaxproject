//seac


//
import React, { useState, useEffect } from "react";
import MedDataService from "../services/MedsDataService";
import { Link } from "react-router-dom";



const Search = () => {
  const [meds, setMeds] = useState([]);
 /* const [currentPlant, setCurrentPlant] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchCName, setSearchCName] = useState("");*/

  useEffect(() => {
    retrieveMeds();
    
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
                 		
            <td>if({drugcompany}=" Walgreen Company"){
                {drugcompany}

            }</td>
                    		
                    <td>{Drugbrandname}</td>
                  
                    <td>{Drugname}</td>
                </tr>
            )
        })
    }   
 
    return (
        <>
            <h1 id='title'>Basic Med Information</h1>
            <table id='med' class="center">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                <tr>	<td><input type="text" name="company" size="30"  /></td>
            	<td><input type="text" name="brand_name" size="30"  /></td>
           <td><input type="text" name="generic_name" size="30"  /></td>
           <td><button > Search </button></td>
             </tr>  
                    {renderBody()}
                </tbody>
               
            </table>
        </>
    )
}   

export default Search;