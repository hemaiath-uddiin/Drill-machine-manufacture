import React, { useEffect, useState } from 'react';

const Reviews = () => {
       const [review,setReview] = useState([]) 
       useEffect(()=>{ 
           fetch('http://localhost:5000/review') 
           .then(res=>res.json()) 
           .then(data=> setReview(data))
       },[])
    return (
        <div className='container'>
              <div className="row"> 
               <h2> our review</h2>
                       { 
                         review.map((review,_id)=>{ 
                             return( 
                                 <div key={_id} className="col-lg-4"> 
                                      <h1> Rating {review.rating} </h1> 
                                       <p> comments {review.description}  </p>
                                 </div>
                             )
                         })
                       } 
                 </div>
              </div>
        
    );
};

export default Reviews;