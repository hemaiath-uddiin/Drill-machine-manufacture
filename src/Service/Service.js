import React from 'react';
 import "./Service.css"
const Service = () => {
      const data =[ 
          {  
             id: 1,
              titel: "country" ,
               des : 222
          } , 
          {  
            id: 2,
             titel: "project" ,
              des : 700
         } , 
         {  
            id: 3,
             titel: "Happy client" ,
              des : 500 
         }
      ]
    return (
        <div className='container service'>
            <h2 className='provide_ser'> provide Services </h2>
            <div className="row">
                  { 
                    data.map((item)=>{ 
                        return( 
                            <div className="col-lg-4">
                            <div className="card card_item" >
                          
                                    <div className="card-body">
                                        <h5 className="card-title des"> {item.titel} </h5>
                                        <p className="card-text paragrap"> {item.des} </p>
                                        
                                    </div>
                            </div>
                        </div>
                        )
                    })
                  }

            </div>
        </div>
    );
};

export default Service;