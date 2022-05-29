import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data)=>{ 
        fetch('https://floating-tor-10144.herokuapp.com/order', {
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
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20  })} />
                        {errors.firstName?.type === 'maxLength' && "First name is required"}

                        <input  type="number" placeholder='rating' {...register("rating", { required: true ,min: 1, max: 5 })} />
                        {errors.rating?.type === "max" && <p> sorry </p> }
                        {errors.rating?.type === "min" &&  alert("hi")}

                        <input type="submit" />
                    </form>

                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("Description", { required: true, maxLength: 20 })} />
                       
                        <input type="number" {...register("rating", { required:true, min: 5, max: 6 })} /> 
                         
                        <input type="submit" />
                    </form> */}

                </div>

            </div>
        </div>
    );
};

export default Review;