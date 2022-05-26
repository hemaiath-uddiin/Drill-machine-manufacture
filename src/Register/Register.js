import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from  "../Firebase/fire.base.init"


const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')    
    const navigate = useNavigate()
    const handleName=(e)=>{ 
        setName(e.target.value)
   }; 
   const handleEmail=(e)=>{ 
      setEmail(e.target.value)
 }; 
 const handlePassword=(e)=>{ 
  setPassword(e.target.value)
};    
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  if(user){ 
    navigate('/')
}
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  // handle form from here 
  const handleForm=(e)=>{ 
    e.preventDefault()  
    console.log(name,email,password); 
    createUserWithEmailAndPassword(email,password)  
   
   

}
    return (
        <div className='container'>
             <form onSubmit ={handleForm} className='w-50 m-auto mt-5'>
             <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Name</label>
                    <input onBlur={handleName}  type="name" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                 
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePassword}  type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary"> Register</button>
            </form> 
        </div>
    );
};

export default Register;