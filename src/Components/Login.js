import React from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import "../Styles/Login.css";
import MetaMask_Fox from "../Images/MetaMask_Fox.png";
import LogoPepolls from "../Images/LogoPepolls.png";
import { Button } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import EN from "../Images/EN.png";
import FR from "../Images/FR.png";
import { useNavigate, useLocation, Navigate, History } from "react-router-dom";
import Verify from "../Components/Verify";
import { connect } from "react-redux";
import {login} from '../Redux/Action/AuthAction'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Login() {


/*
  async function login() {
    console.log("login clicked");
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate();
      
    }
    await Moralis.enableWeb3();
    console.log("logged in user:", user);
    console.log(user.get('ethAddress'));


   

   }
*/

 


  const { authenticate, isAuthenticated } = useMoralis();
  console.log( localStorage.key(1))



const loggedIn = useSelector(state => state.loggedIn);
const dispatch = useDispatch();
            
console.log(loggedIn)

if (loggedIn ) {

  console.log('eyh tekhdem')

} 


  return (
    <>
      <div className="sider">
        <img src={LogoPepolls} alt="logo pepolls" className="logopepolls" />

        <div className="login">
          <img
            src={MetaMask_Fox}
            alt="logo metamask"
            className="logometamask"
          />
<div>
          <button className="connect" onClick={(authenticate ) }>
            Connect via MetaMask
          </button>
         
          </div>
          <div className="link">
            <a
              className="color"
              href="javascript:window.open('  https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '', 'width=700,height=700')    "
            >
              Don't have a <strong> Metamask account? </strong>Create one
            </a>
          </div>
        </div>

        <div className="choice">
          <p className="p">Choose a language</p>

          <button className="language">
            <img src={EN} alt="logo pepolls" />
            <img src={FR} alt="logo pepolls" />
          </button>
        </div>

        <div className="description">
          <a>
            Make sure your first and last name are correct, as they will be
            recorded in our blockchain ledgers and you
          </a>
          <div>
            <a>
              can never change them. You will also use your pseudo name to log
              in to your account the next time.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
const mapDispatchToprops = dispatch => ({ 
  login: isLogin => dispatch(login(isLogin))
});
export default connect(null, mapDispatchToprops) (Login);
