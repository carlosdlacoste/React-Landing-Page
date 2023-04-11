import React from 'react';


const data = {
    title: "Start Bootstrap",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact"
};

export const NavBar = () => {
    return (
        <>
            <nav id="navbarID" className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="#">{data.title}</a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span id="menuBurger" className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="d-flex align-items-end flex-column">

                        <ul className="navbar-nav d-flex flex-md-row justify-content-end">
                            <li className="nav-item p-2">
                            <a className="nav-link active text-white" aria-current="page" href="#">{data.home}</a>
                            </li>
                            <li className="nav-item p-2">
                            <a className="nav-link text-muted" href="#">{data.about}</a>
                            </li>
                            <li className="nav-item p-2">
                            <a className="nav-link text-muted" href="#">{data.services}</a>
                            </li>
                            <li className="nav-item p-2">
                            <a className="nav-link text-muted" href="#">{data.contact}</a>
                            </li>
                        </ul>
                    </div>
                </div>  
            
            </div>
            </nav>
        </>


    )

};




