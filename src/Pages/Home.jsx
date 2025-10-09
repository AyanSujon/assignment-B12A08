import React from 'react';
import Hero from '../Components/Hero';
import TrustedByMillions from '../Components/TrustedByMillions';
import TrendingApps from '../Components/TrendingApps';
import useApps from '../Hooks/useApps';
import Loading from '../Layouts/Loading';
import ErrorPage from './ErrorPage';


const Home = () => {

const { apps, loading, error }  =useApps();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <ErrorPage/>
       }


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