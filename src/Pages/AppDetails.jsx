import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Container from '../Layouts/Container';
import downloadImage from '../assets/icon-downloads.png';
import averageRatingsImage from '../assets/icon-ratings.png';
import totalReviewsImage from '../assets/icon-review.png';
import Loading from '../Layouts/Loading';
import ErrorPage from './ErrorPage';
import { toast } from 'react-toastify';
import Chart from '../Components/Chart';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [disabled, setDisabled] = useState(false);

  const app = apps.find(p => String(p.id) === id);

  useEffect(() => {
    if (!app) return; // wait until app is loaded
    const existingList = JSON.parse(localStorage.getItem('installation')) || [];
    const isInstalled = existingList.some(a => a.id === app.id);
    setDisabled(isInstalled);
  }, [app]); // dependency is the whole app object

  const handleAddToInstallation = () => {
    if (!app) return;

    const existingList = JSON.parse(localStorage.getItem('installation')) || [];
    const isDuplicate = existingList.some(a => a.id === app.id);

    if (isDuplicate) {
      toast.error(`Sorry! You Already Installed "${app.title}" App!`);
      setDisabled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem('installation', JSON.stringify(updatedList));
    setDisabled(true);
    toast.success(`Installed "${app.title}" App Successfully!`);
  };

  if (loading) return <Loading />;
  if (error || !app) return <ErrorPage />;

  const { title, image, ratingAvg, downloads, companyName, reviews, description, size } = app;

  return (
    <div className='bg-[#FAFAFA] py-20'>
      <Container>
        <div className="card grid grid-cols-12">
          <figure className='col-span-12 md:col-span-4'>
            <img src={image} alt={title} />
          </figure>

          <div className="card-body col-span-12 md:col-span-8">
            <h2 className="card-title font-bold text-3xl">{title}</h2>
            <p className='text-xl'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
            <div className="divider"></div>

            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <div className='space-y-2'>
                <figure className='w-10'><img src={downloadImage} alt="Download" /></figure>
                <p className='text-[16px] text-[#001931]'>Downloads</p>
                <h3 className='font-extrabold text-[40px] text-[#001931]'>{downloads}</h3>
              </div>
              <div className='space-y-2'>
                <figure className='w-10'><img src={averageRatingsImage} alt="Ratings" /></figure>
                <p className='text-[16px] text-[#001931]'>Average Ratings</p>
                <h3 className='font-extrabold text-[40px] text-[#001931]'>{ratingAvg}</h3>
              </div>
              <div className='space-y-2'>
                <figure className='w-10'><img src={totalReviewsImage} alt="Reviews" /></figure>
                <p className='text-[16px] text-[#001931]'>Total Reviews</p>
                <h3 className='font-extrabold text-[40px] text-[#001931]'>{reviews}</h3>
              </div>
            </div>

            <div className="card-actions">
              <button
                onClick={handleAddToInstallation}
                disabled={disabled}
                className="btn mt-5 bg-[#00D390] text-white"
              >
                {disabled ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        {/* Chart for component > Chart.jsx */}
        <Chart/>

        <div className="divider"></div>
        <div className='px-2 space-y-2'>
          <h3 className='font-bold text-3xl'>Description</h3>
          <p className='text-[#627382]'>{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
