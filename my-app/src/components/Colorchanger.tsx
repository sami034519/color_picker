import React from "react";
import { useState } from "react";
interface myprop{
    color:string
    setmycolor:(color:string)=>void
}
const ColorChanger:React.FC<myprop>=(props)=>{
    const[inputcolor,setinputcolor]=useState<string>()
    return(
        <>
        <div className="flex justify-center w-full gap-5 mt-5">
            <input className="border-2 border-black p-5 font-medium text-black" type="text" placeholder="Enter the Color You Want"  onChange={(e)=>setinputcolor(e.target.value)}/> <br />

            <button className="bg-green-600 p-5 font-medium text-white" style={{backgroundColor:props.color}} onClick={()=>props.setmycolor(inputcolor||"")}>Set Color</button>

            
        </div>
        </>
    )
} 
export default ColorChanger;