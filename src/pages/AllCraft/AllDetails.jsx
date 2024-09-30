import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllDetails = () => {
    const {id} = useParams();
   
    const [craft, setCraft] = useState({})
    
    useEffect(() => {
        fetch(`https://toma-canvas-server.vercel.app/allCraft/${id}`)
        .then(res=>res.json())
            .then(data => {
                setCraft(data)
                
        })
    }, [id])
    
    return (
        <div className="my-8">
            <h1 className="text-center font-bold text-2xl my-4">View Details</h1>
            
            <div className="card w-auto bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={craft.photoURL} alt={ craft.name } className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{ craft.name }</h2>
                            <div className=" flex justify-between items-center gap-4">
                                <span>Price: { craft.price }</span>
                                <span>Rating: { craft.rating }</span>
                            </div>
                            <div className=" flex justify-between items-center gap-4">
                                <span>Customization: { craft.customization }</span>
                                <span>Stock Status: { craft.stockStatus }</span>
                            </div>

                    
                        </div>
                    </div>
               
           
        </div>
    );
};

export default AllDetails;