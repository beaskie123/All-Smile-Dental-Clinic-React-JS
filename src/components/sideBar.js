import React, { useState } from "react";
import constant from "../hooks/config/constant";
import { Link, useNavigate } from "react-router-dom";

const SideNavbar = () => {
    const [path,setPath] = useState()

    const history = useNavigate()
    const handleClick = () => {
        console.log("hello")
    }
    return(
<div>
           <div className="h-[93vh] flex flex-row">
               <div className="bg-sky-950 h-auto w-[223px]">
                   <div>{constant.navbarContent.map((item ,index)=> {
                        return(
                            <div className="h-[76px] flex flex-row py-[24px] px-[16px] items-center hover:bg-sky-700 gap-4" >
                                <Link to={item.path}>
                                {item.icon}
                                <p className="m-[5px] text-white text-l">{item.title}</p>
                                </Link>
                            </div>
                        )
                    })}</div>
                </div>
                <div className="bg-gray-100 w-screen p-[25px]">

                </div>
            </div> 
</div>
    )
}

export default SideNavbar;