import React from 'react'
import { useState } from 'react'
type obj={
    name:string
    num:number
}
interface mybutton{
    text:string
    onclick?:()=> void
    value:obj
}
const Mybutton:React.FC<mybutton>=(props)=> {
    const changeval=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setinputval(e.target.value)
    }
    let [inpuv,setinputval]=useState('');
  return (
    <>
    <h1>{props.value.name}{props.value.num}</h1>
    <button className='bg-red-300' onClick={props.onclick}>{props.text}</button>
    <input type="text" placeholder='write here' onChange={changeval} />
    <h1>{inpuv}</h1>
    </>
  )
}

export default Mybutton