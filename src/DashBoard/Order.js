import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/fire.base.init';

const Order = () => {
     const [order,setOrder] =useState([ ])  
     const [user] = useAuthState(auth);
     useEffect(()=>{ 
        if(user){ 
            fetch(`http://localhost:5000/orders? name=${user.email}`)
            .then(res=>res.json()) 
            .then(data=>setOrder(data))
        }
     },[user])
   
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"> Eamil </th>
      <th scope="col"> Phone </th>
    </tr>
  </thead>
  <tbody>
        { 
           order.map(a=> <tr>
            <th scope="row">1</th>
            <td> {a.Name}</td>
            <td> {a.Email} </td>
            <td> {a.Phone} </td> 
            <button className='btns'> Delet</button>
          </tr>)
        }
   
  
  </tbody>
</table>
        </div>
    );
};

export default Order;