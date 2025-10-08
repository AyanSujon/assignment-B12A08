import React from 'react';
import Hero from '../Components/Hero';
import TrustedByMillions from '../Components/TrustedByMillions';
import TrendingApps from '../Components/TrendingApps';
import useApps from '../Hooks/useApps';

const Home = () => {

const { apps,loading, error }  =useApps();

const featuredApps = apps.slice(0, 8);



    return (
        <>
        <Hero/>
        <TrustedByMillions/>
        <TrendingApps featuredApps={featuredApps}/>
        

        
        </>
    );
};

export default Home;