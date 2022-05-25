import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='container'>
            <h2> Tools </h2>
            <div className="row">
                {
                    tools.map((tool) => {
                      
                        return (
                            <div className="col-lg-4 d-block d-lg-flex">
                                <div className="card" >
                                    <img src= {tool.img} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title"> Name:{tool.name} </h5>
                                            <p className="card-text"> {tool.des} </p> 
                                            <p className="card-text"> {tool.quantity} </p>
                                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
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

export default Tools;