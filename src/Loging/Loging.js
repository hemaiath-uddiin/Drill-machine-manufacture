import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import auth from '../Firebase/fire.base.init'; 
import "./Loging.css"


const Loging = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')  
    const navigate = useNavigate() 
    const location = useLocation();  
    const from = location.state?.from?.pathname||'/'

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }   
    // signIng with email and password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
        // signIn with goole 
      const [signInWithGoogle, users] = useSignInWithGoogle(auth);
      if (users) {
        navigate("/")
    }
    // show error user and loading 

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      } 
    
      if(user){ 
          navigate(from, {replace:true})
      } 
     
      
             

    // handle loging form
    const loginFormHandle = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
       


    }

    return (
        <div className='container'>
            <form onSubmit={loginFormHandle} className='w-50 m-auto mt-5'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className='btns'>  
                <button type="submit" class="btn btn-primary">Submit</button>
                <button  onClick={() => { signInWithGoogle() }} class="btn btn-primary"> SignIn Google</button>
                </div>
            </form> 
            <h3> Creat a New Account    </h3> 
             <Link className='btn btn-danger' to="/register"> Ragister   </Link>
        </div>
    );
};

export default Loging;