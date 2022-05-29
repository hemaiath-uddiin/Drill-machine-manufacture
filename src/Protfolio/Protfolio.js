import React from 'react';
import { Link } from 'react-router-dom';
import './Protfolio.css'
const Protfolio = () => {
    return (
        <div className='container'>
              <div className="row"> 
                 <div className="col-lg-6"> 
                    <img className='img-fluid' src="https://images.pexels.com/photos/4040305/pexels-photo-4040305.png?cs=srgb&dl=pexels-honye-sanges-4040305.jpg&fm=jpg" alt="" />
                 
                 </div> 
                 <div className="col-lg-6"> 
                    <h1 className='name'>Name:shifat</h1>
                    <h1 className='email'>Email: hemaithshifat@gmail.com</h1>
                   
                      <h2>My Best works</h2>
                        <a href="https://travel-guide-82920.web.app/"> Travel Guide</a>
                        <a href="https://iphone-warehouse-auth.web.app/"> WareHouse</a>
                        <a href="https://curious-moonbeam-cf0693.netlify.app/"> best website </a> 
                        <div className="ul"> 
                            <h1> Expert In</h1>
                           <ul> 
                               <li> Reactjs </li>
                               <li> javaScript </li>
                               <li> Mongodb </li>
                               <li> Firebase</li>
                               <li> Express Js</li>
                               <li>  Node js </li>
                           </ul>
                        
                        </div>
                 </div>
              </div>
        </div>
    );
};

export default Protfolio;