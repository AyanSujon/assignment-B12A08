import React from 'react';
import Container from '../Layouts/Container';
import { Link } from 'react-router';
import appNotFoundImage from '../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div className='text-[#F5F5F5] py-20'>
            <Container>
                <div className='flex flex-col justify-center gap-5'>
                    <figure >
                        <img src={appNotFoundImage} alt="App Not Found Image" />
                    </figure>
                    <h1 className='text-[#001931] font-semibold text-5xl'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to={"/"} className="btn btn-gradient text-white font-semibold">Go Back!</Link>
                </div>
            </Container>
        </div>
    );
};

export default AppNotFound;