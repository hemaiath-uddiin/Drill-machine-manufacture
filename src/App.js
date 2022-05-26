
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Loging from "./Loging/Loging";
import Navbar from "./Navbar/Navbar";
import Register from "./Register/Register";
import RequerAuth from "./RequerAuth/RequerAuth";
import Tools from "./Tools/Tools"; 



function App() {
  return (
    <div className="App"> 

           <Navbar></Navbar> 
          <Routes> 
            <Route path="/" element={<Home></Home>}>   </Route>
            <Route path="/tools" element={ <Tools></Tools>}> </Route> 
          <Route path="/details/:id" element={ <Details></Details>}> </Route> 
          <Route path="/loging" element={ <Loging></Loging> }> </Route> 
          <Route path="/register" element={ <Register></Register> }> </Route> 
          <Route path='/dashboard' element={
               <RequerAuth> <DashBoard></DashBoard> </RequerAuth>

            } > </Route>
         
          <Route path="/dashboard" element={ <Register></Register> }> </Route> 
 
          </Routes>
   
       
    </div>
  );
}

export default App;
