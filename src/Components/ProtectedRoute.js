import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Login from './Login'
import Verify from './Verify';
import { useMoralis } from "react-moralis";


const key = localStorage.key(1); 
console.log(key);
const value =localStorage.getItem(key);
console.log(value);



/*
const result = localStorage.getItem(
  "Parse/lrytSy11WjeWad2vEXr2689z0lEhYi77xMsuxHcB/currentUser"
);
console.log(result);

*/


const ProtectedRoute = () => {

   //holds the path we are in
  return value ? <Outlet/> : <Navigate to ='/' />  //whatever passed in the state is saved in the location


}

export default ProtectedRoute;