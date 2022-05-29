import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
               <Banner></Banner> 
             <Tools></Tools> 
             <Service></Service>  
             <Reviews></Reviews>
             <Footer></Footer>
        </div>
    );
};

export default Home;