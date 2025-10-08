import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Container from '../Layouts/Container';
import downloadImage from '../assets/icon-downloads.png';
import averageRatingsImage from '../assets/icon-ratings.png';
import totalReviewsImage from '../assets/icon-review.png';


const AppDetails = () => {
     const {id} = useParams();
    const { apps, loading, error }  =useApps();
    // console.log(apps);
    const app = apps.find(p => String(p.id) === id );
    // console.log(app);
       if(loading){
        return <p>Loading...</p>
       }
    const {title, image, ratingAvg, downloads, companyName, reviews} = app || {};



    return (
        <>
        <div className='bg-[#FAFAFA] py-20'>
            <Container>
                <div className="card grid grid-cols-12">
                <figure className=' col-span-12 md:col-span-3'>
                    <img className=''
                    src={image}
                    alt="image" />
                </figure>
                <div className="card-body col-span-12 md:col-span-9">
                    <h2 className="card-title font-bold text-3xl"> {title}ToDo List with Reminder</h2>
                    <p className='text-xl'>Developed by <span className='text-[#632EE3]'>{companyName}</span> </p>
                      <div className="divider"></div>
                      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                        <div className='space-y-2'>
                            <figure className='w-10'>
                                <img src={downloadImage} alt="Download Image" />
                            </figure>
                            <p className='text-[16px] text-[#001931]'>Downloads</p>
                            <h3 className='font-extrabold text-[40px] text-[#001931]'>{downloads}</h3>
                        </div>
                        <div className='space-y-2'>
                            <figure className='w-10'>
                                <img src={averageRatingsImage} alt="Average Ratings" />
                            </figure>
                            <p className='text-[16px] text-[#001931]'>Average Ratings</p>
                            <h3 className='font-extrabold text-[40px] text-[#001931]'>{ratingAvg}</h3>
                        </div>
                        <div className='space-y-2'>
                            <figure className='w-10'>
                                <img src={totalReviewsImage} alt="Total Reviews" />
                            </figure>
                            <p className='text-[16px] text-[#001931]'>Total Reviews</p>
                            <h3 className='font-extrabold text-[40px] text-[#001931]'>{reviews}</h3>
                        </div>
                      </div>
                    <div className="card-actions">
                    <button className="btn mt-5 bg-[#00D390] text-white">Install Now (291 MB)</button>
                    </div>
                </div>
                </div>
            </Container>
        </div>
        
        </>
    );
};

export default AppDetails;