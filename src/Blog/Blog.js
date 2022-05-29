import React from 'react';

const Blog = () => {
    const cards = [
        {
            id: 1,
            title: "How will you improve the performance of a React Application?",
            des: "Keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders"

        },
        {
            id: 2,
            title: "What are the different ways to manage a state in a React application?",
            des: "Data State.,Control State,Session State,Location State."

        },
        {
            id: 3,
            title: "How does prototypical inheritance work?",
            des: "JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied."


        },
        {
            id: 4,
            title: "What is a unit test? Why should write unit tests?",
            des: "Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the unit meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure."

        },
        {
            id: 5,
            title: "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
            des: " i have to search product.name "

        },
    ]
    return (
        <div className='container'>
            <div className="row">

                {
                    cards.map((card) => {
                        return (
                            <div className="col-lg-4 d-block d-lg-flex">
                                <div class="card" >
                                   
                                        <div class="card-body">
                                            <h5 class="card-title"> {card.title} </h5>
                                            <p class="card-text"> {card.des} </p>
                                          
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

export default Blog;