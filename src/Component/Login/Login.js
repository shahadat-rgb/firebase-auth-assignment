import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from "../../Image/Logo.png"
import google from "../../Icon/google.png"
import fb  from "../../Icon/fb.png"
import "./Login.css"
const Login = () => {
    const [newUser,setNewUser]= useState(false)
    const [confirmPasswordError,setConfirmPasswordError]=useState(false)

    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      email: "",
      photoURL: "",
      error:"",
      success:false,
    })

    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history =useHistory()
    const location = useLocation()
  
  let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
   
    const handleGoogleSignIn =()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
             const {displayName,email} =result.user;
             const signInUser={name:displayName,email}
                 setLoggedInUser(signInUser);
                 history.replace(from);
                 
      }).catch(function(error) {
        //    var errorCode = error.code;
        //    var errorMessage = error.message;
       });

    }
     const handleFacebookSignIn=()=>{
             const fbProvider= new firebase.auth.FacebookAuthProvider();
             firebase.auth().signInWithPopup(fbProvider).then(function(result) {
                const {displayName,email} =result.user;
                const signInUser={name:displayName,email}
                    setLoggedInUser(signInUser);
                    history.replace(from)
                    console.log("user info", result.user)
                    
         }).catch(function(error) {
                 
          });
   
     }

     const handleBlur = (e) => {
  
        let isFromValid;
        if (e.target.name === "email") {
          isFromValid = /\S+@\S+\.\S+/.test(e.target.value)
    
        }
         if (e.target.name === "password") {
            const passwordValidation = e.target.value.length >= 6
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFromValid = passwordValidation && passwordHasNumber; 
         }
         
        
        if (isFromValid) {
          const userInfo = { ...user }
          userInfo[e.target.name] = e.target.value;
          setUser(userInfo)
    
        }
      }
    
      const handelSubmit = (e) => {
    
          if(newUser && user.email && user.password){
                  user.password === user.confirmPassword ?
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res =>{
            setConfirmPasswordError(false)
            const newUserInfo={ ...user} 
              newUserInfo.error='';
              newUserInfo.success=true;
              setUser(newUserInfo)
              
            })
             
             
        
          .catch(error => {
                 const newUserInfo={ ...user}
                  newUserInfo.error=error.message;
                  newUserInfo.success=false;
                   setUser(newUserInfo)
               
               })
               :setConfirmPasswordError(true)
          }
         if(!newUser && user.email && user.password){
           firebase.auth().signInWithEmailAndPassword(user.email,user.password)
          .then(res =>{
            const newUserInfo={ ...user}
              newUserInfo.error='';
              newUserInfo.success=true;
              setUser(newUserInfo)
              setLoggedInUser(newUserInfo);
              history.replace(from)
           
              
      
          })
          .catch(error => {
                 const newUserInfo={ ...user}
                 newUserInfo.error=error.message;
                 newUserInfo.success=false;
                   setUser(newUserInfo)
               
               });
         
              }
            e.preventDefault();
      }
    
  
    return (
      
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <img class="travel-logo" src={Logo} alt="" srcset="" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul class="navbar-nav pd-5">
                        <li class="nav-item active">
                            <Link to="/home" class="nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " href="#">Destination</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " href="#" >Contack</Link>
                        </li>
                        <button class="btn btn-warning login-btn">Login</button>
                    </ul>
                </div>
            </nav>
            <hr/>
            <div className="container" style={{marginTop:"70px"}}>
              <section class="row justify-content-center">
                  <section class="col-12 col-sm-6 col-md-7">
                  <div className="main-from">
                      <form onSubmit={handelSubmit}>

                            {newUser &&  <h3 style={{marginBottom:"10px"}} className="text-center">Create an account</h3>} 
                            {!newUser && <h3 style={{marginTop:"50px",textAlign:"center"}}>Login</h3>}
                             
                            {newUser && <input type="text" className="input-box" name="name" onBlur={handleBlur} placeholder="write first name"  required />}<br/> <br/>
                            {newUser && <input type="text" className="input-box" name="name" onBlur={handleBlur} placeholder="Last name" required />}<br/> <br/>
                            <input className="input-box" onBlur={handleBlur} type="text" name="email" placeholder="write your email" required /><br/> <br/>
                            <input className="input-box" onBlur={handleBlur} type="password" name="password" placeholder="write your password" required /><br/><br/>
                            { newUser &&   <small>your must be 6 charcter length 0r 6+ and must be can write the any number(0-9)</small> }
                            {newUser &&  <input className="input-box" onBlur={(event)=>setUser({...user,confirmPassword:event.target.value})}
                           type="password"  placeholder="confirm password" required />} <br/><br/>
                            {   confirmPasswordError ?  <h5 style={{color:"red",textAlign:"center"}}>Doesn't match your password </h5> : '' } 
                            {!newUser && <input type="checkbox" name="" id=""/>} {!newUser &&<label htmlFor="">Remember me</label>} {!newUser && <span style={{marginLeft:"48%",color:"orange"}}>Forgotten password</span>} <br/>
                            { !newUser && < button class="btn btn-warning input-button" >Login</button>}
                            {newUser &&   <button class="btn btn-warning input-button" >Create an account </button>  }
                           
                       </form>

                    <div className="text-center">
                         {!newUser &&  <span style={{marginRight:"8px",fontSize:"20px"}}>Don't have an account?</span>}
                         {newUser && <span style={{marginRight:"8px" ,fontSize:"20px"}}>Already have an account</span>}

                         <input class="checkbox" type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" /> 
                         {newUser &&  <label htmlFor="newUser"  style={{color:"orange",fontSize:"15px"}}>Login</label>  }  
                         {!newUser &&  <label htmlFor="newUser" style={{color:"orange",fontSize:"15px"}}> Create an account </label>}
                   </div>
                           <h3 style={{ color: "red" }}>{user.error}</h3>
                           {user.success && <h3 style={{ color: "green",textAlign:"center" }}> User {newUser ? "created successfully,please click the checkbox" : "logged In successfully,please click the login btn"}</h3>}
                                                              
                              
                   </div>   

                  </section>
              </section>
              <br/>

                 <p class="text-center">-----------------Or-------------------</p>

                <section class="row justify-content-center">
                    <section class="col-12 col-sm-6 col-md-6">
                        <div onClick={handleGoogleSignIn} class="auth-provider">
                            <img style={{ height: "40px", width: "40px", marginRight: "30%" }} src={google} alt="" />
                            <h4>Sign in Google</h4>
                        </div>
                        <br/>
                        <div onClick={handleFacebookSignIn} class="auth-provider">
                            <img style={{ height: "40px", width: "40px", marginRight: "30%" }} src={fb} alt="" />
                            <h4>Sign in facebook</h4>
                            <br/>
                            <br/>
                        </div>
                    </section>
                </section>
            </div>
        </div>

    );
 }


export default Login;