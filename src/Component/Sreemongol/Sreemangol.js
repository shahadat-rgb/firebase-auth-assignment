import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import Logo from "../../Image/Logo.png"
import Sreemongol from "../../Image/Sreemongol.png";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
        border:" none",
        padding: "15px",
        bordeRadius: "2px",
       backgroundColor: "lightgray",
    },
}));

const Sreemangol = () => {
    const history=useHistory()
    const formHandler=(e)=>{
        e.preventDefault()
        history.push("/sreemongolHotel")
    }
    const classes = useStyles();
    return (
        <body style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Sreemongol})` }} className="home">


        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <img class="logo" src={Logo} alt="" srcset="" />
                <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul class="navbar-nav pd-5">
                        <input class="input-fild" type="text" placeholder="Search your destination" />
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link text-white" href="#">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" href="#">Destination</Link>
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
        <div className="container booknig-aria">
            <div className="row">
                <div className="col-md-6">
                    <h1 style={{ fontSize: "50px" }} class="text-white ">SREEMONGOL</h1><br />
                    <h5 class="text-white">It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites.</h5>
                </div>
                <div className="col-md-6">
                <form onSubmit={formHandler} >
                    <div className="input-aria">
                        <p>Origin</p>
                        <input class="input-type" type="text" required name="" />
                        <p>Destination</p>
                        <input class="input-type" required type="text" />
                        <div className="row">
                            <div className="col-md-6">
                                <p>From</p>
                                <div className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        type="date"
                                        required
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                           
                                <p>To</p>
                                <div className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        type="date" 
                                        required
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <br />
                         <input className="input-btn" type="submit" value="Start Booking" />
                      </div>
                   </form>
                </div>
            </div>
        </div>

    </body>
    );
};

export default Sreemangol;