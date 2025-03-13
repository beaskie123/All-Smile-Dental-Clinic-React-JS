import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import '../index.css'
import Landing from "../components/landingPage";
import Navbar from "../components/Navbar";
import Home from "./routes/Home";
import Booking from "./routes/Booking";
import Signup from "./routes/Sigup";



const App = () => {
  const checkPath = window.location.pathname;
  return (
    <>
    <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='signup' element={<Signup />} />
           <Route path='/home' element={<Navbar />} />
           <Route path='/booking' element={<Booking />} />
    </Routes>
    </>
  )
}

export default App;
