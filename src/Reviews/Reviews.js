import React, { useEffect, useState } from 'react';
import './Reviewss.css'
const Reviews = () => {
       const [review,setReview] = useState([]) 
       useEffect(()=>{ 
           fetch('https://floating-tor-10144.herokuapp.com/review') 
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
                                 <div key={_id} className="col-lg-4 rating_wraper"> 
                                      <h1 className='rantin_num'> <span className='ranting'>Rating</span> {review.rating} </h1> 
                                       <p className='rating_des'> <span className='comments'>comments:</span> {review.firstName}  </p>
                                 </div>
                             )
                         })
                       } 
                 </div>
              </div>
        
    );
};

export default Reviews;