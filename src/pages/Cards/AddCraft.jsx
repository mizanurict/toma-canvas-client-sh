
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';

const AddCraft = () => {

    const { user } = useContext(AuthContext);
    

    const handleAdd = event => { 
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;
        const subCategory = form.subCategory.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const processing_time = form.processing_time.value;
        const email = form.email.value;
        const mail =user.email
        const addInfo = { name, userName, email, price, customization, stockStatus, processing_time, rating, photoURL, subCategory, shortDescription, mail }
        console.log(addInfo);
        
        //send to server
        fetch('https://toma-canvas-server.vercel.app/addCraft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Canvas Craft Added Successfully",
                        icon: "success"
                      });
                }
               
             })

        
    }


    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="my-4 text-2xl font-semibold">Add Craft</h1>
            <form onSubmit={ handleAdd } className='border p-4 rounded-md w-2/3'>
            <div className="mb-4 flex items-center justify-center gap-2">
                    <label className="block text-blue-700 text-xl font-bold mb-2" htmlFor="subCategory">
                    Sub Category: 
                        </label>
                        <select className='border' name="subCategory" id="subCategory" required>
                            <option value="Landscape Painting">Landscape Painting</option>
                        <option value="Portrait Drawing">Portrait Drawing</option>
                        <option value="Watercolour Painting">Watercolour Painting</option>
                        <option value="Oil Painting">Oil Painting</option>
                        <option value="Charcoal Sketching">Charcoal Sketching</option>
                        <option value="Cartoon Drawing">Cartoon Drawing</option>
                        </select>
                    
                    </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
                       User Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userName" type="text" name="userName" placeholder="user name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="photoURL" type="text" name="photoURL" placeholder="photo url" />
                </div>
               
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
                        Short Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortDescription" type="text" name="shortDescription" placeholder="short description" />
                </div>
                <div className="flex justify-between gap-2">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" name="price" placeholder="Price" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rating" type="text" name="rating" placeholder="rating" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="processing_time">
                        Processing Time
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="processing_time" type="text" name="processing_time" placeholder="Processing Time" />
                </div>
                    
                </div>
                <div className="flex justify-between gap-2">
                <div className="mb-4 flex items-center justify-center gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customization">
                        Customization: 
                        </label>
                        <select className='border' name="customization" id="customization">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    
                    </div>
                    <div className="mb-4 flex items-center justify-center gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stockStatus">
                    Stock Status: 
                        </label>
                        <select className='border' name="stockStatus" id="stockStatus">
                            <option value="In_Stock">In stock</option>
                            <option value="Stock_out">Stock Out</option>
                        </select>
                    
                    </div>
                   
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Email" />
                </div>
                <button className="btn btn-secondary w-full mb-4"><input type="submit" value="Add Craft" /></button>
                
            </form>
        </div>
    );
};

export default AddCraft;