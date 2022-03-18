import React, { useEffect } from "react";
import LogoPepolls from "../Images/LogoPepolls.png";
import Phone from "./Phone";
import "../Styles/Verify.css";
import { useNavigate } from "react-router-dom";
import OTP from "../Components/OTP";

function Verify() {
  const navigate = useNavigate();

  const otp = () => {
    navigate("/otp");
  };

  return (
    <>
      <div className="sider">
        <img src={LogoPepolls} alt="logo pepolls" className="logopepolls" />

        <div className="body">
          <div>
            <p className="security">This is a security check</p>
            <p className="verify">Verify your account</p>
          </div>
          <p className="phoneverif">
            Please verify your account by entering your mobile number below.
          </p>
          <Phone />
          <button className="connect" onClick={otp}>
            Submit
          </button>
          <div className="conditions">
            <a>-Allow Pepolls to access you messages</a>
            <a>
              - Make sure you are using the used phone number in the same device
              as Pepolls.
            </a>
            <a>
              - Your phone number will be associated to your account and you
              will use it to recover you account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
