import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import Logo from "../../Image/Logo.png"
import sundorbon from "../../Image/sundorbon.png";
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

const Sundarban = () => {
    const history=useHistory()
    const formHandler=(e)=>{
        e.preventDefault()
        history.push("/sundorbonHotel")
    }
    const classes = useStyles();

    return (
        <body style={{ backgroundImage: ` url(${sundorbon})` }} className="home">


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
                    <h1 style={{ fontSize: "50px" }} class="text-white ">SUNDORBAN</h1><br />
                    <h5 class="text-white">The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.</h5>
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

export default Sundarban;