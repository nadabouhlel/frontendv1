import { React, useEffect, useState } from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfile from "./Components/Pages/EditProfile";
import Login from "./Components/Login";
import OTP from "./Components/OTP";
import ProtectedRoute from "./Components/ProtectedRoute";
import Verify from "./Components/Verify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route exact path="/verify" element={<Verify />} />
          <Route exact path="/otp" element={<OTP />} />
          <Route exact path="/editprofile" element={<EditProfile />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
