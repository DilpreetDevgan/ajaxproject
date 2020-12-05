//
import React, { useState, useEffect } from "react";
import BadDataService from "../services/BadsDataService";
import { Link } from "react-router-dom";



const BadsList = () => {
  const [bads, setBads] = useState([]);
  const[q,setQ] = useState([]); // this is for searching by drug company
  const[p,setP] = useState([]); //this is for searching by Drugbrandname
  const[m,setM] = useState([]); //this is for searching by Drugname

  useEffect(() => {
    retrieveBads();
    
  }, []);
  
    const retrieveBads = () => {
    BadDataService.getAll()
      .then(response => {
        setBads(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

 
  

  


  
   const renderHeader = () => {
        let headerElement = ['Name ', ' Status ', ' Portrayed' ,'Image',' Nickname' ]

        return headerElement.map((key, index) => {
           return <th key={index}>{key}</th>
			})
    }
    
 const renderBody = () => {
        return bads && bads.map(({ id, name, status, portrayed,img,nickname }) => {

     
            return (
                 
               
                <tr key={id}>
                 		
                 <td>  {name}  </td>
                 <td>  {status}  </td>
                 <td>  {portrayed}  </td>
                 <td>  <img src={img}></img> </td>

               
                 <td>  {nickname}  </td>

                 

                                        
                </tr>
            )
        })
    }   
 
    return (
        <>
            <h1 id='title'>Breaking Bad Series </h1>
            <table id='med' class="center">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                <tr>	<td><input type="text" name="company" size="30"  value={q} onChange={(e)=> setQ(e.target.value)}/></td>
            	<td><input type="text"  size="30"  value={p} onChange={(e)=> setP(e.target.value)} /></td>
           <td><input type="text" size="30"  value={m} onChange={(e)=> setM(e.target.value)} /></td>
           <td><input type="text" size="30"  /></td>
           <td><input type="text" size="30"  /></td>
         
             </tr> 
             
                  {renderBody()}
                
                </tbody>
            </table>
        </>
    )
}   

export default BadsList;