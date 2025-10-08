import React from 'react';
import appStore from '../assets/appStore.png';
import playStore from '../assets/playStore.png';
import heroImg from '../assets/hero.png';
import Container from '../Layouts/Container';

const Hero = () => {
    return (
        <div className='pt-20 bg-[#F5F5F5] '>
            <Container>
            <div className='text-center space-y-5 px-2'>
            <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className=' w-full md:w-2/3 lg:w-3/4 mx-auto '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="btn-box flex gap-5 items-center justify-center">
                <a href='https://www.apple.com/app-store/' target='_blank'  className="btn"><span><img src={appStore} alt="App Store" /></span>Google Play</a>
                <a href='https://play.google.com/' target='_blank' className="btn"><span><img src={playStore} alt="Play Store" /></span>Google Play</a>
            </div>
            <figure >
                <img className='mx-auto ' src={heroImg} alt="Hero Image" />
            </figure>
            </div>
            </Container>
        </div>
    );
};

export default Hero;