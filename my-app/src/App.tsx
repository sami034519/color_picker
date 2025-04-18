import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mybutton from './components/Mybutton';
import Partent from './components/Partent';
interface Book{
  name:string
  num:number
}

function App() {
  let [value,setvalue]=useState<Book>({name:"sami",num:1});
  return (
   <>
   <Partent/>
   
   
   </>
  );
}

export default App;
