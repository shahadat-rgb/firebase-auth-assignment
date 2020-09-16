import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import Logo from "../../Image/Logo.png"
import Rectangle from "../../Image/Rectangle.png"
import Sajek from "../../Image/Sajek.png"
import Sreemongol from "../../Image/Sreemongol.png";
import sundorbon from "../../Image/sundorbon.png";
const Home = () => {
    return (
    <body style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Rectangle})`}} className="home">
       
       
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                       <img class="logo" src={Logo} alt="" srcset="" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                        <ul class="navbar-nav pd-5">
                            <input className="input-fild" type="text" placeholder="Search your destination" />
                            <li class="nav-item active">
                                <Link to="/home" class="nav-link text-white" href="#">Home<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link  class="nav-link text-white" href="#">Destination</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" href="#">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" href="#" >Contack</Link>
                            </li>
                            <button class="btn btn-warning login-btn">Login</button>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container booking-aria">
                <div className="row">
                 <div className="col-md-3">
                 <h1 class="text-white">COX,S BAZAR</h1><br/>
                   <h5 class="text-white">From the early 9th century the greater Chittagong area, including Cox's Bazar, was under the rule of Arakan kings until its conquest by the Mughals in 1666 AD.[5 When]resent-day Cox's Bazar on his way to Arakan.</h5><br/><br/>
                   <button class="btn btn-warning booking-btn">Booking...</button>
                 </div>
                 <div className="col-md-3">
                <Link to="/sajek" >  <img className="travel-img" src={Sajek} alt=""/> </Link> 
                  <h2 className="place-name">SAJEK VELLY</h2>     
                 </div>
                 <div className="col-md-3">
                <Link to="/sreemongol"> <img className="travel-img" src={Sreemongol} alt=""/>  </Link>
                 <h2 className="place-name">SRIMONGOL</h2>
                 </div>
                 <div className="col-md-3">
               <Link to="/sundorbon">  <img className="travel-img" src={sundorbon} alt=""/></Link>  
                 <h2 className="place-name">SONDORBON</h2>
                 </div>
                    
               </div>
       </div>   

 </body> 
    );
};

export default Home;

