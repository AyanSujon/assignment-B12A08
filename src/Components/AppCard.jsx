import React from 'react';
import cardImage from '../assets/Rectangle 2.png';
import { Download, Star } from 'lucide-react';

const AppCard = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src={cardImage}
            alt="Card image" />
        </figure>
        <div className="flex flex-col gap-2 p-4">
            <h2 className="card-title">Forest: Focus for Productivity</h2>
            <div className="card-actions justify-between">
            <div className="badge badge-soft badge-success  font-medium"><span><Download size={16} /></span> 9M</div>
            <div className="badge badge-soft badge-warning font-medium"><span><Star size={16} /></span> 5</div>
            </div>
        </div>
        </div>
















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