import React from "react";
import constant from "../../hooks/config/constant";

const Signup = () => {
    return (
        <div className="bg-white w-screen h-screen">
            <div className="bg-sky-950 w-[60%] h-screen place-content-center justify-center place-items-center ">
                <div className='bg-gray-200 shadow-2xl flex justify-center w-auto rounded-3xl h-[80%] [&::-webkit-scrollbar]:[width:10px] overflow-y-auto'>
                    <form className=" justify-around max-w-md  pt-6 pb-8">
                        <p className="text-[32px] w-auto tracking-wide text-gray-700 font-bold place-self-center">Sign Up</p>
                        <div className="flex flex-wrap  mb-6 grid grid-cols-3 ">
                        {constant.signupData.map((item,index)=> {
                            console.log(index)
                    return(
                        <div className="w-full px-3 mb-4 ">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-[5px]" for="grid-first-name">
                                    {item.title}
                                </label>
                                <div className="flex place-items-center mx-3px">
                                <div>{item.icon}</div>
                                <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-full py-2 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="grid-first-name" type={item.type} placeholder={item.placeHolder}/>
                                </div>
                            </div>
                    )
                         })}
                         <button>Create Profile</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Signup ;