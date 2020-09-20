import React from 'react';
import Logo from "../../Image/Logo.png"
import { Link } from 'react-router-dom';
import Rectangle1 from "../../Image/Rectangle1.png"
import star_1_ from "../../Icon/star_1_.png"
import Rectangle2 from "../../Image/Rectangle2.png"
import Rectangle3 from "../../Image/Rectangle3.png"
import Map from "../Map/Map.js"
const StayInSundorbon = () => {
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
            <p>150 stys jun 15-09-20 guests</p>
            <h4>Stay in Sundorbon</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card mb-3" style={{maxWidth:"540px"}}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={Rectangle1} class="card-img" alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Light bright airy stylish apt and safe peacegul stay </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px" }}>4.9(20)</span><span  style={{fontSize:"25px" }}>$34/<small class="night">night</small>  </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={Rectangle2} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Apertment in list panorama </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px"}}>4.9(20)</span><span  style={{fontSize:"25px" }}>$50/<small class="night">night</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3" style={{ maxWidth: "540px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={Rectangle3} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">AR Loungh & pool (r&b + b&b) </h5>
                                        <p class="card-text">4geust 2bathroom 2beats 2 baths  Wif air conditioning kitchen cancellation fexibilit aviliable</p>
                                        <img style={{ height: "20px" }} src={star_1_} alt="" /><span style={{ marginRight: "100px",fontSize:"25px" }}>4.9(10)</span><span  style={{fontSize:"25px" }}>$44/<small class="night">night</small></span>
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

export default StayInSundorbon;