
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Tools from "./Tools/Tools";


function App() {
  return (
    <div className="App"> 

           <Navbar></Navbar> 
          <Routes> 
            <Route path="/" element={<Home></Home>}>   </Route>
            <Route path="/tools" element={ <Tools></Tools>}> </Route>
 
          </Routes>
   
       
    </div>
  );
}

export default App;
