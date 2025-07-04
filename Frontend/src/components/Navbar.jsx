import React from 'react'
import logo from '../assets/logo1.png'
import curs from '../assets/cursor.png'

function Navbar() {
  const navarray = [
    {name: "Home"},
    {name: "Cart"},
    {name: "Orders"},
    {name: "Category"},
  ]
  return (
    <div className="w-full bg-blue-500 fixed top-0 left-0 z-50">
      <div className="navbar bg-blue-500 shadow-sm">
        <div className="navbar-start">
          <img src={logo} alt="logo" className="h-12" />
          <span className="text-xl font-semibold hover:text-black cursor-[url('https://cdn-icons-png.flaticon.com/24/11316/11316997.png'),pointer]">Dev's Stores</span>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
      {navarray.map((item) => (
        <li key={item.name} className="hover:text-black font-semibold"><a>{item.name}</a></li>
      ))}
    </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown flex md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
        <li><a>Categories</a></li>
      </ul>
    </div>
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
