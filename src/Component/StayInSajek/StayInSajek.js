import React from 'react';
import Logo from "../../Image/Logo.png"
import { Link } from 'react-router-dom';
import "./StayInSajek.css"
const StayInSajek = () => {
    return (
        
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
               <img class="travel-logo" src={Logo} alt="" srcset="" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/home" class="nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#"> Destination </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#" >Contack</Link>
                    </li>
                    <button class="btn btn-warning login-btn">Login</button>
                </ul>
            </div>
        </nav>
        <hr/>
    </div>
    
    );
};

export default StayInSajek;