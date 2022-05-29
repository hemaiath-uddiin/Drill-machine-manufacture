import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/fire.base.init';

const Order = () => {
     const [order,setOrder] =useState([ ])  
     const [user] = useAuthState(auth);
     useEffect(()=>{ 
        if(user){ 
            fetch(`https://floating-tor-10144.herokuapp.com/orders? name=${user.email}`)
            .then(res=>res.json()) 
            .then(data=>setOrder(data))
        }
     },[user])
      // handle delet 

        const handleDelet =(id)=>{ 
              const proceed = window.confirm("are you sure want to delet") 
              if(proceed){ 
                const url = `https://floating-tor-10144.herokuapp.com/orders/${id}`
                fetch(url,{ 
                    method: "DELETE"
                }) 
                .then(res=>res.json()) 
            .then(data=>{ 
                 const remaining = order.filter(orders=>orders._id !==id)
                    setOrder(remaining)
                console.log("success",data);
            })
              }
        }
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
            <button onClick={()=>{handleDelet(a._id)}} className='btns'> Delet</button>
          </tr>)
        }
   
  
  </tbody>
</table>
        </div>
    );
};

export default Order;