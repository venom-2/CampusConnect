import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-slate-800 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span class="font-semibold text-xl tracking-tight">Campus Connect</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <Link to="/findcollege" class={location.pathname === "/findcollege" ? "text-white block mt-4 lg:inline-block lg:mt-0 ":"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                            Find a College
                        </Link>
                        <Link to="/notes" class={location.pathname === "/notes" ? "text-white block mt-4 lg:inline-block lg:mt-0 " : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                            Notes
                        </Link>
                        <Link to="/projects" class={location.pathname === "/projects" ? "text-white block mt-4 lg:inline-block lg:mt-0 " : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                            Projects
                        </Link>
                        <Link to="/job" class={location.pathname === "/job" ? "text-white block mt-4 lg:inline-block lg:mt-0" : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                            Job Openings
                        </Link>
                        <Link to="/aboutus" class={location.pathname === "/aboutus" ? "text-white block mt-4 lg:inline-block lg:mt-0" : "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"}>
                            About Us
                        </Link>
                    </div>
                    <div>
                        <Link to="/signin" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-slate-950 bg-slate-300 hover:bg-slate-400 mt-4 lg:mt-0 mx-2">Sign In</Link>
                    </div>
                    <div>
                        <Link to="/register" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-slate-950 bg-slate-300 hover:bg-slate-400 mt-4 lg:mt-0">Create an Account</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar