import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/fire.base.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const SignOut = () => {
    signOut(auth)
  }
  return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-primary" >
        <div className="container-fluid">
          <a className="navbar-brand"  href ="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto m-auto mb-2 mb-lg-0">
              <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tools"> Tools</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/service"> Services </Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/blog"> BLog </Link>
              </li>  
             
               
              <li className="nav-item">
                  { 
                     user && <Link className="nav-link" to="/dashboard"> DashBoard</Link>
                  }
                
                
              </li> 
              <li className="nav-item">
                   { 
                      user?  <button className='signOut' onClick={SignOut}> sigout</button> 
                      :  
                      <Link className="nav-link" to="/loging"> Loging </Link>
                   }
               
               
                
              </li>
            
            
            </ul>
         
          </div>
        </div>
      </nav>
    );
};

export default Navbar;