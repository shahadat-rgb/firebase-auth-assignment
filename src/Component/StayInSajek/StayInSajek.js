import React, { useContext }  from 'react';
import Logo from "../../Image/Logo.png"
import { Link } from 'react-router-dom';
import "./StayInSajek.css"
import sajek1 from "../../Image/sajek1.jpeg"
import star_1_ from "../../Icon/star_1_.png"
import sajek2 from "../../Image/sajek2.jpeg"
import sajek3 from "../../Image/sajek3.jpeg"
 import Map from "../Map/Map.js"
import { UserContext } from '../../App';

 

const StayInSajek = () => {
   const [loggedInUser,setLoggedInUser]=useContext(UserContext)
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
                        <Link class="nav-link" href="#" > md shahadat hossain</Link>
                    </li>
                   
                   
                </ul>
            </div>
        </nav>
        <hr/>
        <div className="container">
         <h4 style={{textAlign:"center",color:"orange"}}> <span style={{color:"greenyellow"}}> Welcome |</span>  {loggedInUser.name} </h4> 
            <p>252 stys Apr 10-17-3 guests</p>
            <h4>Stay in Sajek Velly</h4>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card mb-3" style={{maxWidth:"540px"}}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={sajek1} class="card-img" alt="" />
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
                                    <img src={sajek2} class="card-img" alt="..." />
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
                                    <img src={sajek3} class="card-img" alt="..." />
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

export default StayInSajek;