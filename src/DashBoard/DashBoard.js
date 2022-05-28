import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
           <div className="container"> 
             
             <div className="row"> 
                <div className="col-lg-3 dash"> 
                  <Link to="/dashboard"> My Orders  </Link>
                  <Link to="/dashboard/review"> Add Review  </Link>
                  <Link to="/dashboard/myprofile"> My Profile  </Link>
                </div> 
                <div className="col-lg-9"> 
                     
                      <Outlet />
                
                </div>
             
             </div>
           
           
           </div>
      
    );
};

export default DashBoard;