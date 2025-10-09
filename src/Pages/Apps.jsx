import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Container from '../Layouts/Container';
import AppCard from '../Components/AppCard';
import Loading from '../Layouts/Loading';
import AppNotFound from './AppNotFound';
import ErrorPage from './ErrorPage';




const Apps = () => {

    const [search, setSearch] = useState("");
    const { apps, loading, error }  =useApps();
    
    if(loading){
        return <Loading/>;
       }
    
        if(error){
        return <ErrorPage/>
       }

    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)): apps



    return (
        <>
        <div className='py-20 bg-[#F5F5F5] '>
        <Container>

                <div className='text-center mb-10 space-y-3'>
                    <h2 className='text-[#001931] text-5xl font-bold'>Our All Applications</h2>
                    <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>



            <div className='text-center space-y-3'>
            <div className='flex justify-between items-center mb-2 px-2'>
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

                {
                    loading ?(<div className='py-10'><Loading /></div>)
                    :
                    searchedApps.length === 0?
                     <AppNotFound />
                     :
                    <div className='card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 py-10'>
                    {
                    searchedApps.map(app =>  <AppCard key={app.id} app={app}/> )
                    }
                    </div>

                    

                }
            </div>
        </Container>
        </div>
        </>
    );
};

export default Apps;