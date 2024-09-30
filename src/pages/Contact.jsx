import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold my-8 text-center">Contact Us</h1>
            <div className="grid md:grid-col-1 lg:grid-cols-2">
        <div className=" lg:col-span-1 p-4 mr-8 border rounded-lg bg-slate-50">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your name" className="mb-2 input input-bordered w-full " />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Your Email" className="mb-2 input input-bordered w-full " />
            <div className="flex flex-col mt-2">
              <label htmlFor="message">Message</label>
              <textarea name="message" className="border rounded-md" placeholder="Your message" id="" cols="10" rows="7"></textarea>
            </div>
            <button className="btn btn-sm">Sent</button>
          </form>
        </div>
        <div className="lg:col-span-1 p-2 space-y-8 mt-8 ml-4 ">
          <p className="flex items-center gap-2">
            
            <FaPhoneAlt /> Phone: +88015 17104035
          </p>
          <p className="flex items-center gap-2">
            <FaRegEnvelope /> Email: mizanurictiu@gmail.com
          </p>
          <address className="flex items-center gap-2">
            <IoLocationSharp /> Address: Housing road, Kushtia sadar, Kushtia
          </address>
          
        </div>
      </div>  
        </div>
    );
};

export default Contact;