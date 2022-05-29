import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Tool.css'

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch("https://floating-tor-10144.herokuapp.com/item")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    const navigate = useNavigate()
    const navigateDetails = (id) => {
        navigate(`/details/${id}`)
    }

    return (
        <div className='container'>
            <h2> Tools </h2>
            <div className="row">
                {
                    tools.map((tool) => {
                        const { _id, name, img, des, quantity } = tool
                        return (
                            <div className="col-lg-4 d-block d-lg-flex">
                                <div className="card" >
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"> Name:{name} </h5>
                                        <p className="card-text"> {des} </p>
                                        <p className="card-text"> {quantity} </p>
                                        <button onClick={() => { navigateDetails(_id) }} className="btn btn-primary"> BUY NOw</button>
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