import React, { useEffect, useState } from 'react';
import Container from '../Layouts/Container';
import { ChevronDown, Download, Star } from 'lucide-react';
import useApps from '../Hooks/useApps';
import Loading from '../Layouts/Loading';
import { toast } from 'react-toastify';


const Installation = () => {

    const [install, setInstall] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');



    useEffect(()=> {
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if(savedList){
            setInstall(savedList)
        }
    },[]);


const { loading, error }  =useApps();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <ErrorPage/>
       }

    const sortedItem = (
        ()=> {
        if(sortOrder === 'size-asc'){
            return [...install].sort((a, b)=> a.size - b.size)
        }else if(sortOrder === 'size-dsc'){
             return [...install].sort((a, b)=> b.size - a.size)
        }else{
           return install
        }
    }
    )();


    const handleRemove = (id)=>{
         const existinglist = JSON.parse(localStorage.getItem('installation'))
        let updatedList = existinglist.filter(a => a.id !== id );
        // for ui instant update
        setInstall(updatedList);
       toast.success("App uninstalled successfully!")
 
        localStorage.setItem("installation", JSON.stringify(updatedList));

    }


    return (
        <div className='bg-[#F5F5F5] py-20'>
            <Container>
                <div className='text-center space-y-3 py-10'>
                    <div className='text-center space-y-3'>
                        <h2 className='text-[#001931] text-5xl font-bold'>Your Installed Apps</h2>
                        <p className='text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                </div>

                <div className='flex justify-between items-center mb-10 px-2'>
                    <div>
                        <h6 className='font-semibold'>(<span>{install.length}</span>) Apps Found</h6>
                    </div>
                    <div>

                    <select 
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                    
                    defaultValue="Pick a color" className="select">
                    <option
                    value={'none'}
                    disabled={true}>Sort By Size</option>
                    <option value='size-dsc'>High-Low</option>
                    <option value='size-asc'>Low-High</option>
                    </select>
                    </div>
                </div>

                {/* installation card container */}
                <div className='card-container space-y-3'>

                {
                sortedItem.length === 0?
                <h1 className='text-[#001931] font-semibold text-3xl text-center py-10'>No Installed Apps Found</h1>
                :
                    sortedItem.map(a=> 
                        
                    <div className='flex justify-between items-center gap-5 flex-wrap bg-white rounded-lg p-4 shadaw-sm'>
                        <div className='flex items-center gap-5 '>
                            <figure className='w-20 rounded-lg overflow-hidden'>
                                <img className='object-cover w-full' src={a.image} alt="card image" />
                            </figure>
                            <div className='space-y-2'>
                                <h2 className='text-[#001931] font-medium text-lg md:text-xl'>{a.title}</h2>
                                <div className='flex gap-1 md:gap-4  items-center'>
                                    <div className="badge badge-soft badge-success  font-medium"><span><Download size={16} /></span> {a.downloads}</div>
                                    <div className="badge badge-soft badge-warning font-medium"><span><Star size={16} /></span> {a.ratingAvg}</div>
                                    <div className=" font-medium text-[#627382]"><span>{a.size}MB</span></div>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=> handleRemove(a.id)} className='btn bg-[#00D390] text-white'>Uninstall</button>
                    </div>

                    )
                }

                </div>
            </Container>
        </div>
    );
};

export default Installation;