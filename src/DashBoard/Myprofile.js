import React from 'react';
import { Link } from 'react-router-dom';
 import './Profil.css'
const Myprofile = () => {
    return (
        <div className='container'>
            <h2> well come to My Profile </h2> 
            <div className="row"> 
                <div className="col-lg-6"> 
                   <img className='img-fluid'  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
                
                </div> 
                <div className="col-lg-6"> 
                   <h1>Hemaith Uddin Shifat</h1> 
                   <p>Profession: Student</p>  
                   <div className="recentWork"> 
                       <h2>My Best works</h2>
                        <a href="https://travel-guide-82920.web.app/"> Travel Guide</a>
                        <a href="https://iphone-warehouse-auth.web.app/"> WareHouse</a>
                        <a href="https://curious-moonbeam-cf0693.netlify.app/"> best website </a>
                   </div>
                
                </div>
            
            </div>
        </div>
    );
};

export default Myprofile;