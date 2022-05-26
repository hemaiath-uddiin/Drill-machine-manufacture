import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = ({children}) => {
     const {id} = useParams() 
      const [details,setDetails] = useState({}) ;
       useEffect(()=>{ 
           const url = `http://localhost:5000/item/${id}` 
            fetch(url) 
            .then(res=>res.json()) 
            .then(data=> setDetails(data))
       },[])
     return (
      
      <div className='container'>
            <h2> More Information</h2>  
            <div className="row"> 
                <div className="col-lg-6">  
                    <img className='img-fluid'  src= {details.img} alt="" />
                    <h1> Name: {details.name} </h1> 
                    <p>Description: {details.des}</p> 
                     <p>Quantity: {details.qunatity}  </p>
                
                </div>
            
            </div>
       </div>
    );
};

export default Details;