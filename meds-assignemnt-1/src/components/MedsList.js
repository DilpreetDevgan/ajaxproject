//
import React, { useState, useEffect } from "react";
import MedDataService from "../services/MedsDataService";
import { Link } from "react-router-dom";



const MedsList = () => {
  const [meds, setMeds] = useState([]);
  const[q,setQ] = useState([]); // this is for searching by drug company
  const[p,setP] = useState([]); //this is for searching by Drugbrandname
  const[m,setM] = useState([]); //this is for searching by Drugname

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

 
  
function drugcompa(drugcompany,Drugbrandname,Drugname){
if(drugcompany.indexOf(q)>-1){                        //drugcompany.toLowerCase().indexOf(q)>-1
return( 
  <td>{drugcompany}</td>
);

}

//drugcompany + Drugbrandname + Drugname ;
}
function drugcompan(drugcompany,Drugbrandname,Drugname){
  if(drugcompany.indexOf(q)>-1){                        //drugcompany.toLowerCase().indexOf(q)>-1
  return( 
    <td>{Drugbrandname}</td>
  );
  }
 
  }
  function drugcompans(drugcompany,Drugbrandname,Drugname){
    if(drugcompany.indexOf(q)>-1){                        //drugcompany.toLowerCase().indexOf(q)>-1
    return( 
      <td>{Drugname}</td>
    );
    }
   
    }


  


  
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
                 		
                 {drugcompa(drugcompany,Drugbrandname,Drugname)}
                 {drugcompan(drugcompany,Drugbrandname,Drugname)}
                 {drugcompans(drugcompany,Drugbrandname,Drugname)}
             

                                        
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
                <tr>	<td><input type="text" name="company" size="30"  value={q} onChange={(e)=> setQ(e.target.value)}/></td>
            	<td><input type="text"  size="30"  value={p} onChange={(e)=> setP(e.target.value)} /></td>
           <td><input type="text" size="30"  value={m} onChange={(e)=> setM(e.target.value)} /></td>
         
             </tr> 
             
                  {renderBody()}
                
                </tbody>
            </table>
        </>
    )
}   

export default MedsList;