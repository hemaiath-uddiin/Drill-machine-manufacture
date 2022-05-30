import React from 'react';
import { useForm } from "react-hook-form"; 
import "./SingleReview.css" 

const Review = () => {
    const { register, handleSubmit,  formState: { errors }, } = useForm();
    const onSubmit = (data)=>{ 
        fetch('http://localhost:5000/review', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log( data);
            })
        
           
        console.log(data); 
        
    } 

    
    return (
        <div className='container'>
            <h2> Add Your Review</h2>
            <div className="row">
                <div className="col-lg-8 review">
                    <form className='review_input' onSubmit={handleSubmit(onSubmit  )}>
                        <input {...register("firstName", { required: true, maxLength: 1000  })} /> <br />
                        {errors.firstName?.type === 'maxLength' && " You can type 100 characters"}

                        <input  type="number" placeholder='rating' {...register("rating", { required: true ,min: 1, max: 5 })} /> <br />
                        {errors.rating?.type === "max" && <p style={{color:"red",fontSize:"20px"}}> sorry You cannot given rating above 5 </p> }
                        {errors.rating?.type === "min" &&  alert("hi")}

                        <input  className='inputReview' type="submit" />
                    </form>

                  

                </div>

            </div>
        </div>
    );
};

export default Review;