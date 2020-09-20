import React from 'react';
import Logo from "../../Image/Logo.png"
import { Link } from 'react-router-dom';
import star_1_ from "../../Icon/star_1_.png"
import sreemongol1 from "../../Image/sreemongol1.jpeg"
import sreemongol2 from "../../Image/sreemongol2.jpeg"
import sreemongol3 from "../../Image/sreemongol3.jpeg"
import Map from "../Map/Map.js"
const StayInSreemongol = () => {
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
                    <li class="nav-item">
                        <Link class="nav-link" href="#" >shahadat hossain</Link>
                    </li>
                   
                   
                </ul>
            </div>
        </nav>
        <hr/>
        <div className="container">
            <p>242 stys Apr 30-17-3 guests</p>
            <h4>Stay in Sreemongol</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card mb-3" style={{maxWidth:"540px"}}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={sreemongol1} class="card-img" alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Light bright airy stylish apt and safe peacegul stay </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px" }}>6.9(10)</span><span  style={{fontSize:"25px" }}>$30/<small class="night">night</small>  </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={sreemongol2} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Apertment in list panorama </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px"}}>5.9(25)</span><span  style={{fontSize:"25px" }}>$45/<small class="night">night</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={sreemongol3} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">AR Loungh & pool (r&b + b&b) </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px" }}>3.9(10)</span><span  style={{fontSize:"25px" }}>$34/<small class="night">night</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             <div className="col-md-6">
                 <Map></Map>
             </div>
         </div>
        </div>
    </div>
    
    );
};

export default  StayInSreemongol;