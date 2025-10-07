import React from 'react';
import Container from '../Layouts/Container';

const TrustedByMillions = () => {
    return (
        <div className='btn-gradient py-20 '>
            <Container>
                <div className=' text-center text-white space-y-10'>
                <h2 className='font-bold text-4xl'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center px-2 md:px-20'>
                    <div className='space-y-3'>
                        <p className='text-lg '>Total Downloads</p>
                        <h4 className='font-extrabold text-6xl'>29.6M</h4>
                        <p className='text-lg '>21% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-lg '>Total Reviews</p>
                        <h4 className='font-extrabold text-6xl'>906K</h4>
                        <p className='text-lg '>46% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-lg '>Active Apps</p>
                        <h4 className='font-extrabold text-6xl'>132+</h4>
                        <p className='text-lg '>31 more will Launch</p>
                    </div>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default TrustedByMillions;