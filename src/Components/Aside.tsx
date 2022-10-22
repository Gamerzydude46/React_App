import React from 'react'
import logo from './logo.svg'
import '../App.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

const Aside = () => {

  return <aside className="w-60 h-screen bg-slate-800">
                 <div className='flex flex-col  items-center '>
                       <div className='p-3'>
                            <img src={logo} alt='logo' className='w-40 animate-spin' />
                       </div>
     
                       <div className='p-5 mt-2 w-full text-center'>
                            <ul className=' space-y-3 text-lg font-semibold text-react-blue'>
                               <CustomLink to="/" list="React Js"></CustomLink>
                               <CustomLink to="/Api" list="React Api"></CustomLink>
                               <CustomLink to="/Form" list="React Form"></CustomLink>
                             </ul>
                       </div>
                  </div>
          </aside>
}

const CustomLink = ( {to,list,...props}:{to:any; list:any;} ) =>{
  
 
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch( {path: resolvePath.pathname, end:true} )
 
  return <li  className={isActive ? "active" : "menu" }>
               <Link to={to} {...props}>
                  {list}
               </Link>
         </li>
  
}

export default Aside
