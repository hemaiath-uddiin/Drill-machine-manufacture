import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
               <Banner></Banner> 
             <Tools></Tools> 
             <Service></Service> 
             <Footer></Footer>
        </div>
    );
};

export default Home;