import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import Logo from "../../Image/Logo.png"
import "./Sajek.css"
import Sajek from "../../Image/Sajek.png"
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

const SajekVelly = () => {
    const history=useHistory()
    const formHandler=(e)=>{
        e.preventDefault()
        history.push('/sajekHotel')
    }
    const classes = useStyles();
    return (
        <body style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Sajek})` }} className="home">


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
                        <h1 style={{ fontSize: "50px" }} class="text-white ">SAJEK VELLY</h1><br />
                        <h5 class="text-white">The name of Sajek Valley came from the Sajek River that originates from Karnafuli river. The Sajek river works as a border between Bangladesh and India.this is outstanding place.Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls</h5>
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

export default SajekVelly;