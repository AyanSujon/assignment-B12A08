import React from 'react';
import error404 from '../assets/error-404.png';
import Container from '../Layouts/Container';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <>
        
        <div className='bg-[#F5F5F5] py-10'>
            <Container>
                <div className=' mx-auto px-2'>
                    <figure className='p-10'>
                        <img className='mx-auto' src={error404} alt="Page Not Found" />
                    </figure>
                  <div className='text-center space-y-3'>
                    <h1 className='text-[#001931] font-semibold text-5xl'>Oops, page not found!</h1>
                    <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to={"/"} className="btn btn-gradient text-white font-semibold">Go Back!</Link>
                  </div>
                </div>
            </Container>
        </div>
        
        </>
    );
};

export default ErrorPage;