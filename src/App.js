
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Myprofile from "./DashBoard/Myprofile";
import Order from "./DashBoard/Order";
import Review from "./DashBoard/Review";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Loging from "./Loging/Loging";
import Navbar from "./Navbar/Navbar";
import Register from "./Register/Register";
import RequerAuth from "./RequerAuth/RequerAuth";
import Service from "./Service/Service";
import Tools from "./Tools/Tools"; 



function App() {
  return (
    <div className="App"> 

           <Navbar></Navbar> 
          <Routes> 
            <Route path="/" element={<Home></Home>}>   </Route>
            <Route path="tools" element={ <Tools></Tools>}> </Route> 
            <Route path="/service" element={<Service></Service>}> </Route> 
          <Route path="/details/:id" element={  
               <RequerAuth> <Details></Details> </RequerAuth>
          
          }> </Route> 
          <Route path="/loging" element={ <Loging></Loging> }> </Route> 
          <Route path="/register" element={ <Register></Register> }> </Route> 
          <Route path="/dashboard" element={ 
          
                 <DashBoard></DashBoard>
              }> 
          <Route index element={<Order />} />
          <Route path="myprofile" element={<Myprofile />} />
          <Route path="review" element={<Review />} />
          
          </Route>
 
          </Routes>
   
       
    </div>
  );
}

export default App;
