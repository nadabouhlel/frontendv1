import React from 'react'
import LogoPepolls from "../Images/LogoPepolls.png";
import Phone from './Phone';
import "../Styles/Verify.css";
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';



function Verify() {

  const navigate = useNavigate();
  
  const editprofile = () => {
    navigate('/editprofile');

  }


  return (
    <>
    <div className="sider">
    <img src={LogoPepolls} alt="logo pepolls" className="logopepolls" />
    
    <div className='body'>
      <div >
<p className='security'>Verification</p>
<p className='verify'>Enter OTP</p>
</div>
<p className='phoneverif'>We have sent you access code via SMS for mobile number verification</p>


<div className='verif'> 
<div className='textfield'>
<TextField
          className='outlined-number'
          label="Verification Number"
        />
</div>
<button className='connect' onClick={editprofile}>Verify</button>


</div>




<div className='conditions'>
  <a>Nothing received? Send it again</a>
  

</div>

    </div>
    
    
    
    
    
    </div>
    
    
    
    
    
    </>
  )
}

export default Verify