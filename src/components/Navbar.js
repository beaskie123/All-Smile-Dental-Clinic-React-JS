import React, { useState } from "react";
import SideNavbar from "./sideBar";

const Navbar = () => {
    return(
<div>
<div className="bg-sky-950 border-gray-200 dark:bg-gray-900 h-[7vh] grid grid-cols-3 gap-4 p-[15px]">
    <div className="col-span-2 flex">
    <img className="h-[40px] w-[40px] object-fill" src="/img/logo.png"/>
    <p className="text-white text-xl font-serif italic">All Smile Dental CLinic</p>
    </div>
    <p className="text-white text-l hover:text-sky-300 justify-self-end">Log in/Sign up</p>
</div>
<SideNavbar />
</div>
    )
}

export default Navbar;