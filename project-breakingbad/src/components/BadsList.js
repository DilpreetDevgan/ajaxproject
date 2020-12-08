//
import React, { useState, useEffect } from "react";
import BadDataService from "../services/BadsDataService";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';



const BadsList = () => {
  const [bads, setBads] = useState([]);
  const[q,setQ] = useState([]); 
  const[p,setP] = useState([]);
  const[m,setM] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    retrieveBads();
    
  }, []);
  
    const retrieveBads = () => {
      setLoading(true);
    BadDataService.getAll()
      .then(response => {
        setBads(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

 
 
  function names(name,status,potrayed,img,nickname){
    if(name.indexOf(q)>-1){                      
    return( 
      <td>{name}</td>
    );
    
    }
    
   
    }
    function statuss(name,status,potrayed,img,nickname){
      if(name.indexOf(q)>-1){                        
      return( 
        <td>{status}</td>
      );
      }
     
      }
      function portrayeds(name,status,portrayed,img,nickname){
        if(name.indexOf(q)>-1){                        
        return( 
          <td>{portrayed}</td>
        );
        }
       
        }
        function imgs(name,status,potrayed,img,nickname){
          if(name.indexOf(q)>-1){                        
          return( 
            <td><img src ={img}  /></td>
          );
          }
         
          }
          function nicknames(name,status,potrayed,img,nickname){
            if(name.indexOf(q)>-1){                        
            return( 
            <td>{nickname}</td>
            );
            }
           
            }
    
      





  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = bads.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  
   const renderHeader = () => {
        let headerElement = ['Name ', ' Status ', ' Portrayed' ,'Image',' Nickname' ]

        return headerElement.map((key, index) => {
           return <th key={index}>{key}</th>
			})
    }
    
 const renderBody = () => {
        return currentPosts && currentPosts.map(({ id, name, status, portrayed,img,nickname }) => {

     
            return (
                 
               
                <tr key={id}>
              		
                {names(name,status,portrayed,img,nickname)}
                {statuss(name,status,portrayed,img,nickname)}
                {portrayeds(name,status,portrayed,img,nickname)}
                {imgs(name,status,portrayed,img,nickname)}
                {nicknames(name,status,portrayed,img,nickname)}

             

                 

                                        
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
                <tr>	<td><input type="text" name="company" size="50"  value={q} onChange={(e)=> setQ(e.target.value)}/></td>
            	<td><input type="text"  size="30"  value={p} onChange={(e)=> setP(e.target.value)} /></td>
           <td><input type="text" size="30"  value={m} onChange={(e)=> setM(e.target.value)} /></td>
           <td><input type="text" size="30"  /></td>
           <td><input type="text" size="30"  /></td>
         
             </tr> 
             
                  {renderBody()}
                


                </tbody>

                
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={bads.length}
        paginate={paginate}
      />
      
            </table>
        </>
    )
}   

export default BadsList;