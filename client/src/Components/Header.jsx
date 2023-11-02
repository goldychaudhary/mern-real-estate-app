// import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate  = useNavigate();

  return (
    <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-orange-400">Gold</span>
                <span className="text-slate-700">Estate</span>
            </h1>
            <form className="bg-slate-100 p-3 rounded-lg flex flex-row items-center">
                <input type={'text'} placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64"></input>
                <FaSearch className='text-orange-400'/>
            </form>
            <ul className='flex gap-4'>
                <li onClick={() => navigate('/home')} className='hidden sm:inline text-slate-600 hover:text-orange-400'>Home</li>
                <li onClick={() => navigate('/about')} className='hidden sm:inline text-slate-600 hover:text-orange-400'>About</li>
                <li onClick={() => navigate('/signin')} className='text-slate-600 hover:text-orange-400'>Sign In</li>
            </ul>
        </div>
    </header>
  )
}
