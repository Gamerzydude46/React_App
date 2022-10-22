import React from 'react'
import './App.css';
import Main from "./Components/Main"
import Aside from "./Components/Aside"
import Navbar from "./Components/Navbar"
import Api from './Components/Api';
import Form from './Components/Form';
import {Route, Routes} from "react-router-dom"

const App:React.FC = () =>{
 
  return (
    <div className="flex flex-row">
      <Aside/>
      <div className="w-full">
        <Navbar/>
        <div className='bg-slate-800 p-5 m-5 rounded-lg shadow-xl'>
          <Routes>
             <Route path="/" element={<Main />} />
             <Route path="/Api" element={<Api />} />
             <Route path="/Form" element={<Form />} />
          </Routes>        
        </div>
      </div>
    </div>
  )
};

export default App;
