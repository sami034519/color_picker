import React, { useState } from 'react'
import ColorChanger from './Colorchanger'
import ColorTaker from './ColorTaker'
const Partent:React.FC=()=> {
    const[color,setcolor]=useState('green');
  return (
    <>
    <ColorTaker color={color}/>
    <ColorChanger color={color} setmycolor={setcolor} />
    </>
  )
}

export default Partent