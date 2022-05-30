import React from 'react';
import img from "../../src/download.png"
const NotFound = () => {
    return (
        <div className='container '>
            <h2 className='text-center'> opps! page does not found</h2> 
            <img className='img-fluid text-center' src= {img} alt="" />
        </div>
    );
};

export default NotFound; 