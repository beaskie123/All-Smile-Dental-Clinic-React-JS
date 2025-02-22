import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import '../index.css'
import Landing from "../components/landingPage";
import Navbar from "../components/Navbar";
import Home from "./routes/Home";
import Booking from "./routes/Booking";

function AppLayout (){
  const checkPath = window.location.pathname;
  return(
  <>
  {checkPath === '/' ? (<Landing />) : (
  <>  <Navbar />
      <Outlet />
  </>
)
  }
  
  
  </>
  )
};

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
      </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
  ;
}

export default App;
