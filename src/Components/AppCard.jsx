import React from 'react';
import { Download, Star } from 'lucide-react';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    // console.log(app)
    const {title, image, id, ratingAvg, downloads} = app;

    return (
        <Link to={`/apps/${id}`}>
        <div className="card bg-base-100 shadow-sm">
        <figure className='p-3 w-55 mx-auto'>
            <img
            className='w-full object-cover'
            src={image}
            alt="Card image" />
        </figure>
        <div className="flex flex-col gap-2 p-4">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
            <div className="badge badge-soft badge-success  font-medium"><span><Download size={16} /></span> {downloads}</div>
            <div className="badge badge-soft badge-warning font-medium"><span><Star size={16} /></span> {ratingAvg}</div>
            </div>
        </div>
        </div>
        
        </Link>
















        // <div>
        //     <div>
        //         <figure>
        //             <img src={cardImage} alt="Card image" />
        //         </figure>

        //     </div>
        // </div>
    );
};

export default AppCard;