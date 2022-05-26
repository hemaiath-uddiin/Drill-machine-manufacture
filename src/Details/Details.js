import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom'; 
import "./Details.css"

const Details = ({ children }) => {
    const { id } = useParams()
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div className='container'>
            <h2> More Information</h2>
            <div className="row">
                <div className="col-lg-6">
                    <img className='img-fluid' src={details.img} alt="" />
                    <h1> Name: {details.name} </h1>
                    <p>Description: {details.des}</p>
                    <p>Quantity: {details.qunatity}  </p>

                </div>
                <div className="col-lg-6 ">
                   <div className="forms"> 
                         <div className="quantity"> 
                         <h1> Quantity</h1> 
                         <input placeholder='Enter Quantity' className='w-50 ' type="number" />
                         </div>
                   <form onSubmit={handleSubmit(onSubmit)}>
                 
                        <input placeholder='Name' {...register("Name", { required: true, })} /> <br />
                        <input placeholder='Phone' type= "number" {...register("Phone")} /> <br />
                        <input placeholder='Email' type="email" {...register("Email")} /> <br />
                        <input type="submit" />
                    </form>
                   
                   </div>

                </div>

            </div>
        </div>
    );
};

export default Details;