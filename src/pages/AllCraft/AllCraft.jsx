import { Link, useLoaderData } from "react-router-dom";


const AllCraft = () => {
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
                            <img src={singleCraft.photoURL} alt={ singleCraft.name } className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{ singleCraft.name }</h2>
                            <div className=" flex justify-between items-center gap-4">
                                <span>Price: { singleCraft.price }</span>
                                <span>Rating: { singleCraft.rating }</span>
                            </div>
                            <div className=" flex justify-between items-center gap-4">
                                <span>Customization: { singleCraft.customization }</span>
                                <span>Stock Status: { singleCraft.stockStatus }</span>
                            </div>

                    <div className="card-actions">
                    
                    <Link to={`/allCraft/${singleCraft._id}`}><button className="btn btn-secondary">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                    ))}
               
            </div>
            
        </div>
    );
};

export default AllCraft;