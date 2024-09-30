import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    const crafts = useLoaderData();
    const { _id, name, photoURL, subCategory, shortDescription, price, rating, customization, stockStatus, processing_time } = crafts;
    
    
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const subCategory = form.subCategory.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const processing_time = form.processing_time.value;
        
        const updateCraft = { name, photoURL, subCategory, shortDescription, price, rating, customization, stockStatus,processing_time }
        

        //send to server
        fetch(`https://toma-canvas-server.vercel.app/allCraft/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: "Success",
                        text: "Update Craft Successfully",
                        icon: "success"
                      });
                }
             })
        

}

    return (
        <div className="flex flex-col items-center justify-center my-8  p-16 mx-16">
        <h2 className="text-3xl font-bold my-4">Update Craft </h2>
        <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name"
                        defaultValue={name}
                         />
                </div>
              
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photoURL" type="text" name="photoURL" defaultValue={photoURL} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                        Sub Category
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subCategory" type="text" name="subCategory"
                        defaultValue={subCategory} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
                        Short Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortDescription" type="text" name="shortDescription" defaultValue={shortDescription} />
                </div>
                <div className="flex justify-between gap-2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" name="price" defaultValue={price} />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rating" type="text" name="rating" defaultValue={rating} />
                </div>
                </div>
                <div className="flex justify-between gap-2">
                <div className="mb-4 flex items-center justify-center gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customization">
                        Customization: 
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customization" type="text" name="customization" defaultValue={customization} />
                    
                    </div>
                    <div className="mb-4 flex items-center justify-center gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stockStatus">
                    Stock Status: 
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stockStatus" type="text" name="stockStatus" defaultValue={stockStatus} />
                    
                    </div>
                   
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="processing_time">
                        Processing Time
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="processing_time" type="text" name="processing_time" defaultValue={processing_time} />
                </div>
                
                <button className="btn btn-secondary w-full mb-4"><input type="submit" value="Update" /></button>
                
            </form>
      </div>
    );
};

export default UpdateCraft;