import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CraftDetails = () => {
    const {id} = useParams();
   
    const [craft, setCraft] = useState({})
    
    useEffect(() => {
        fetch(`https://toma-canvas-server.vercel.app/allCraftData/${id}`)
        .then(res=>res.json())
            .then(data => {
                setCraft(data)
                
        })
    }, [id])
    
    return (
        <div className="my-8">
            <h1 className="text-center font-bold text-2xl my-4">View Details</h1>
            
            <div  className="card w-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={craft.image} alt={ craft.item_name } className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                        <h2 className="card-title">{ craft.item_name }</h2>
                        <p className="opacity-80">{ craft.short_description}</p>
                        <h3 >Category: <span className="font-semibold">{ craft.subcategory_Name}</span></h3>
                                <div className=" flex justify-between items-center gap-4">
                                    <span>Price: <span className="font-semibold">{ craft.price }</span> </span>
                                    <span>Rating: <span className="font-semibold">{ craft.rating }</span></span>
                                </div>
                        <p>Processing Time: <span className="font-semibold">{craft.processing_time }</span></p>
    
                        
                            </div>
                        </div>
               
           
        </div>
    );
};

export default CraftDetails;