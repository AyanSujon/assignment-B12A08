import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Container from '../Layouts/Container';
import AppCard from '../Components/AppCard';
import { Link } from 'react-router';
import Loading from '../Layouts/Loading';
import AppNotFound from './AppNotFound';




const Apps = () => {
    const [search, setSearch] = useState("");
    const { apps,loading, error }  =useApps();
    if(loading){
        return <Loading/>;
       }

    const term = search.trim().toLocaleLowerCase();

    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)): apps;
        // if(searchedApps.length === 0) {
        // return  <AppNotFound />
        // }


    return (
        <>
        <div className='py-20 bg-[#F5F5F5] '>
        <Container>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h6 className='font-semibold'>(<span>{searchedApps.length}</span>) Apps Found</h6>
                </div>
                <div>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <div className='text-center space-y-3'>
                <div className='text-center space-y-3'>
                    <h2 className='text-[#001931] text-5xl font-bold'>Trending Apps</h2>
                    <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 py-10'>
                {
                searchedApps.map(app =>  <AppCard key={app.id} app={app}/> )
                }

                {/* {searchedApps.length > 0 ? (
                        searchedApps.map(app => <AppCard key={app.id} app={app} />)
                    ) : (
                        <AppNotFound />
                    )} */}

                </div>
            
            </div>
        </Container>
        </div>
        </>
    );
};

export default Apps;