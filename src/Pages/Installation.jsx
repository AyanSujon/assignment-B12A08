import React from 'react';
import Container from '../Layouts/Container';
import { ChevronDown, Download, Star } from 'lucide-react';

import demoCardImage from '../assets/Rectangle 2.png';

const Installation = () => {
    return (
        <div className='bg-[#F5F5F5] py-20'>
            <Container>
                <div className='text-center space-y-3 py-10'>
                    <div className='text-center space-y-3'>
                        <h2 className='text-[#001931] text-5xl font-bold'>Your Installed Apps</h2>
                        <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                </div>

                <div className='flex justify-between items-center mb-10 px-2'>
                    <div>
                        <h6 className='font-semibold'>(<span>111</span>) Apps Found</h6>
                    </div>
                    <div>
                        <details className="dropdown">
                        <summary className="btn m-1">Sort By Size<span><ChevronDown /></span></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>low to high</a></li>
                            <li><a>High to low</a></li>
                        </ul>
                        </details>
                    </div>
                </div>

                {/* installation card container */}
                <div className='card-container space-y-3'>
                    {/* Caard */}
                    <div className='flex justify-between items-center gap-5 flex-wrap bg-white rounded-lg p-4 '>
                        <div className='flex items-center gap-5 '>
                            <figure className='w-20 rounded-lg overflow-hidden'>
                                <img className='object-cover w-full' src={demoCardImage} alt="card image" />
                            </figure>
                            <div className='space-y-2'>
                                <h2 className='text-[#001931] font-medium text-lg md:text-xl'>Forest: Focus for Productivity</h2>
                                <div className='flex gap-1 md:gap-4  items-center'>
                                    <div className="badge badge-soft badge-success  font-medium"><span><Download size={16} /></span> 2M</div>
                                    <div className="badge badge-soft badge-warning font-medium"><span><Star size={16} /></span> 4.9</div>
                                    <div className=" font-medium text-[#627382]"><span>258 MB</span></div>
                                </div>
                            </div>
                        </div>
                        <button className='btn bg-[#00D390] text-white'>Uninstall</button>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Installation;