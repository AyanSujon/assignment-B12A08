import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Container from '../Layouts/Container';
import downloadImage from '../assets/icon-downloads.png';
import averageRatingsImage from '../assets/icon-ratings.png';
import totalReviewsImage from '../assets/icon-review.png';
import Loading from '../Layouts/Loading';
import ErrorPage from './ErrorPage';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';


const AppDetails = () => {
     const {id} = useParams();
    const { apps, loading, error }  =useApps();
    const [disabled, setDisabled] = useState(false);
    // console.log(apps);
    const app = apps.find(p => String(p.id) === id );
    // console.log(app);
       if(loading){
        return <Loading/>
       }
       if(error){
        return <ErrorPage/>
       }

    const {title, image, ratingAvg, downloads, companyName, reviews, description} = app || {}

    
const handleAddToInstallation =()=>{
    const existinglist = JSON.parse(localStorage.getItem('installation'))
    let updatedList = [];
    if(existinglist){
        const isDuplicate = existinglist.some(a => a.id === app.id)
        if(isDuplicate) return toast.error(`Sorry! You Already Installed "${app.title}" App!`)
        updatedList = [...existinglist, app]
        toast.success(`Installed "${app.title}" App Successfully!`)
    }else{
        updatedList.push(app)
        toast.success(`Installed "${app.title}" App Successfully!`)
    }
    localStorage.setItem("installation", JSON.stringify(updatedList))
setDisabled(true);
    
}




const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]


    return (
        <>
        <div className='bg-[#FAFAFA] py-20'>
            <Container>
                {/* mian Section */}
                <div className="card grid grid-cols-12">
                <figure className=' col-span-12 md:col-span-4'>
                    <img className=''
                    src={image}
                    alt="image" />
                </figure>
                <div className="card-body col-span-12 md:col-span-8">
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
                    <button onClick={handleAddToInstallation}  disabled={disabled} className="btn mt-5 bg-[#00D390] text-white"> {disabled ? "Installed" : "Install Now (291 MB)"}</button>
                    </div>
                </div>
                </div>
                {/* Ratings Section */}
                <div className="divider"></div>

                <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>




                {/* Description Section */}
                <div className="divider"></div>
                <div className='px-2 space-y-2'>
                    <h3 className='font-bold text-3xl'>Description</h3>
                    <p className=' text-[#627382]'>{description}</p>
                </div>



            </Container>
        </div>
        
        </>
    );
};

export default AppDetails;