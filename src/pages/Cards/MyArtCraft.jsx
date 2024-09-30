/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const MyArtCraft = () => {
    const { user } = useContext(AuthContext);
    
    const [craft, setCraft] = useState([]);
    const [control, setControl] = useState(false);
    
    const handleClick = () => {
        fetch(`https://toma-canvas-server.vercel.app/myCraftSort/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data);
        })
    }
    const handleClickNo = () => {
        fetch(`https://toma-canvas-server.vercel.app/myCraftSortNo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data);
        })
    }


    useEffect(()=>{
        fetch(`https://toma-canvas-server.vercel.app/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data);
        })
    }, [user, control])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                
                  fetch(`https://toma-canvas-server.vercel.app/delete/${_id}`, {
                      method: "DELETE"
                  })
                      .then(res => res.json())
                      .then(data => {
                          console.log(data);
                          if (data.deletedCount > 0) {
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })  
                              setControl(!control)
                          }
                  })
              
            }
          });
            
}
  
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">My Art and Craft</h1>
            <div>
            <div className="dropdown dropdown-bottom flex justify-start items-start my-5">
        <div tabIndex={0} role="button" className="btn m-1 btn-success text-white font-semibold text-xl">
          Customization By <span className=" text-white "> <MdKeyboardArrowDown size={40}/></span>
        </div>
        <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-40">
          <li>
            <button onClick={handleClick} >Yes</button>
          </li>
          <li>
          <button onClick={handleClickNo}  >No</button>
          </li>
        </ul>
      </div>
           </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                {
                    craft.length? "": " No Added Craft"
                }
            {craft.map((singleCraft) => (
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
                        
                                    <Link to={`/updateCraft/${singleCraft._id}`}  className="btn btn-primary">Update</Link>
                                    <button onClick={()=>handleDelete(singleCraft._id)} className="btn btn-warning">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
               
            </div>
        </div>
    ); 
};

export default MyArtCraft;
