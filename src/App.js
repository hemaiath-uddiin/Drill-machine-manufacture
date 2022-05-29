
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog/Blog";
import DashBoard from "./DashBoard/DashBoard";
import Myprofile from "./DashBoard/Myprofile";
import Order from "./DashBoard/Order";
import Review from "./DashBoard/Review";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Loging from "./Loging/Loging";
import Navbar from "./Navbar/Navbar";
import NeedAuth from "./NeedAuth/NeedAuth";
import NotFound from "./NotFound/NotFound";
import Protfolio from "./Protfolio/Protfolio";
import Register from "./Register/Register";
import Reviews from "./Reviews/Reviews";

import Service from "./Service/Service";
import Tools from "./Tools/Tools"; 



function App() {
  return (
    <div className="App"> 

           <Navbar></Navbar> 
          <Routes> 
            <Route path="/" element={<Home></Home>}>   </Route>
            <Route path="/protfolio" element={<Protfolio />}>   </Route>
            <Route path="/review" element={<Reviews />}>   </Route>
            <Route path="/tools" element={ <Tools></Tools>}> </Route> 
            <Route path="*" element={ <NotFound></NotFound>}> </Route> 
            <Route path="/service" element={<Service></Service>}> </Route> 
            <Route path="/blog" element={ <Blog></Blog>}> </Route> 
            <Route path="/details/:id" element={  
             <NeedAuth><Details></Details> </NeedAuth>
               
          
          }> </Route> 
          <Route path="/loging" element={ <Loging></Loging> }> </Route> 
          <Route path="/footer" element={ <Footer></Footer> }> </Route> 
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
