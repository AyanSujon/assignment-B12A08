import React from 'react';
import Container from '../Layouts/Container';
import { Link } from 'react-router';
import { Github } from 'lucide-react';
import siteLogo from '../assets/logo.png'



const Navbar = () => {
    return (
        <>
        <div className='shadow-sm'>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/apps"}>Apps</Link></li>
                            <li><Link to={"/installation"}>Installation</Link></li>
                        </ul>
                        </div>
                        <a className=" flex items-center gap-1 font-bold text-xl text-[#632EE3]"> <figure className='w-10'><img className='object-cover' src={siteLogo} alt="Site Logo" /></figure> HERO.IO</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/apps"}>Apps</Link></li>
                        <li><Link to={"/installation"}>Installation</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a href='https://github.com/AyanSujon' target='_blank' className="btn btn-gradient text-white font-semibold"><span> <Github /></span>Contribute</a>
                    </div>
                </div>
            </Container>
        </div>
        
        </>
    );
};

export default Navbar;