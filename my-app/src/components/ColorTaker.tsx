import React from 'react'
interface myprop{
    color:string
}
const ColorTaker:React.FC<myprop>=(props)=> {
  return (
    <div className="w-screen h-[70vh] " style={{backgroundColor:props.color}}></div>
  )
}

export default ColorTaker