import React from "react";


const Home = () => {
    return(
<div>
<div className="gap-10px">
            <p className="font-bold text-[30px]">Welcome *NAME*</p>
            <p className="my-[10px] text-xl font-medium text-slate-600">Upcoming appointment</p>
            <div className="bg-white border-gray-200 h-[152px] p-[16px] flex place-content-between">
                <div className="flex gap-[15px]">
                <p className="font-bold text-xl">Pharmacy A </p>
                <div>items here</div>
                </div>
                <div>location</div>
            </div>

        </div> 
</div>
       
    )
}

export default Home;