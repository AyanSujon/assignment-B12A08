
import React from 'react';
import Container from '../Layouts/Container';
import AppCard from './AppCard';
import { Link } from 'react-router';

const TrendingApps = ({featuredApps}) => {
    return (
        <>
        <div className='py-20 bg-[#F5F5F5] '>
        <Container>
            <div className='text-center space-y-3'>
                <div className='text-center space-y-3'>
                    <h2 className='text-[#001931] text-5xl font-bold'>Trending Apps</h2>
                    <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 py-10'>
                {
                featuredApps.map(app =>  <AppCard key={app.id} app={app}/> )
                }
                </div>
                <Link to={"/apps"} className="btn btn-gradient text-white font-semibold">Show All</Link>
            </div>
        </Container>
        </div>
        </>
    );
};

export default TrendingApps;