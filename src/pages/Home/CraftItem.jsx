import {Link, useLoaderData } from "react-router-dom";

const CraftItem = () => {

    const allCrafts = useLoaderData();

    return (
        <div className="my-8" >
            <div className="my-8">
            <h1 className="text-2xl font-bold text-center">Art & Craft</h1>
            <p className="mx-auto text-center opacity-80 w-2/3 my-4">Craft item means any consumer commodity that is not an agricultural commodity or a perishable consumer commodity that is manufactured, assembled, fabricated</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                
            {allCrafts.map((singleCraft) => (
                        <div key={ singleCraft._id } className="card w-auto bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={singleCraft.image} alt={ singleCraft.item_name } className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                        <h2 className="card-title">{ singleCraft.item_name }</h2>
                        <p className="opacity-80">{ singleCraft.short_description}</p>
                        <h3 >Category: <span className="font-semibold">{ singleCraft.subcategory_Name}</span></h3>
                                <div className=" flex justify-between items-center gap-4">
                                    <span>Price: <span className="font-semibold">{ singleCraft.price }</span> </span>
                                    <span>Rating: <span className="font-semibold">{ singleCraft.rating }</span></span>
                                </div>
                        <p>Processing Time: <span className="font-semibold">{singleCraft.processing_time }</span></p>
    
                        <div className="card-actions">
                        
                        <Link to={`/allCraftData/${singleCraft._id}`}><button className="btn btn-secondary">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
               
            </div>
            
        </div>
    );
};

export default CraftItem;