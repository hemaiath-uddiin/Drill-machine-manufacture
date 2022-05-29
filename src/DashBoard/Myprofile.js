import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/fire.base.init';
import './Profil.css' 

import { useForm } from "react-hook-form";
const Myprofile = () => {
    const [user] = useAuthState(auth); 
    const { register,handleSubmit} = useForm();
    const onSubmit =(data)=>{ 
          console.log(data);
        fetch('http://localhost:5000/profile', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) 
        .then(response => response.json())
            .then(data => {
                alert('Success:', data);
            })
    };
    return (
        <div className='container'>
            <h2> well come to My Profile </h2>
            <div className="row">
                <div className="col-lg-6">
                    <img className='img-fluid' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />

                </div>
                <div className="col-lg-6">
                    <h1>  {user.displayName}</h1>
                    <p className='email'> Email: {user.email}</p>
                    <p className='profesion' >Profession: Student</p>
                    <div className="recentWork">
                        <h2>My Best works</h2>
                        <a href="https://travel-guide-82920.web.app/"> Travel Guide</a>
                        <a href="https://iphone-warehouse-auth.web.app/"> WareHouse</a>
                        <a href="https://curious-moonbeam-cf0693.netlify.app/"> best website </a>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Education' {...register("education" )} />
                        <input placeholder='City' {...register(" city")} />
                        <input placeholder='phone' type="number" {...register("Phone", )} />
                        <input type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Myprofile;