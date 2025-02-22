import React from "react";
import {useNavigate} from 'react-router-dom'

const Landing = () => {
    const history = useNavigate()
    const handleClick = () => {
        history('/home')
    }
return (
    <div className=" relative w-screen h-screen px-[12%] pt-[3%] bg-gradient-to-r from-sky-900 to-indigo-950">
        <div className="flex place-items-center ">
        <img className="h-[95px] w-[95px] object-fill" src="/img/logo.png"/>
        <p className="text-slate-200 text-[30px] italic">All Smile Dental Clinic</p>
        </div>
        <div className="flex justify-between ">
        <div className="w-[50%]">
        <p className="text-white text-balance text-[60px] italic  py-[20px]">Treat yourself. Book an appointment today !</p>
        <p className="text-slate-400 text-[20px] italic py-[20px]">All Smile helps your dental office and its patients to easily manage appointments and reduce no-shows in real-time, ensuring efficient use of your precious time and resources.</p>
        <div className="flex justify-center mt-[40px] gap-[50px] ">
        <button onClick={handleClick} className="text-white bg-emerald-300 p-[10px] rounded-full  hover:bg-white hover:text-sky-900 font-semibold"
        >Schedule an appointment</button>
        <button className="text-white text-balance border-2 p-[10px] w-[150px] rounded-full font-semibold hover:bg-white hover:text-sky-900">Learn more</button>
        </div>
        </div>
        <div className="relative h-[370px] w-[480px]">
            <div className="absolute bg-sky-700 rounded-full absolute -top-12 left-10  h-[350px] w-[350px]"/>
            <img className="bg-gray-200 z-5 [360px] w-[360px] rounded-full absolute -top-8 left-5 "src="/img/lg3.png"/> 
            <img className="h-[310px] rounded-full border-2 border-gray-200 absolute -bottom-10 -right-5" src="/img/lg2.png"/> 
            <div className="absolute right-10 top-0  h-[20px] w-[20px] bg-emerald-300 animate-[spin_10s_linear_infinite]" />
            <div className="absolute right-3 top-10 h-[10px] w-[10px] bg-emerald-300 animate-[spin_5s_linear_infinite]" />
            <div className="absolute bottom-10 left-10  h-[20px] w-[20px] bg-emerald-300 animate-[spin_10s_linear_infinite]" />
            <div className="absolute bottom-0 left-6 h-[10px] w-[10px] bg-emerald-300 animate-[spin_5s_linear_infinite]" />
        </div>
       
        </div>
        <div class=" absolute w-screen h-13 absolute bottom-0 left-0 overflow-hidden">
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            class="fill-current text-gray-200"></path>
    </svg>
</div>
    </div>
)

}

export default Landing;