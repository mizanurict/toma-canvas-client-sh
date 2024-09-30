import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" text-center my-16">
            <h1 className="text-xl font-semibold">Error 404</h1>
            <h2 className="text-2xl my-4">Not Found Page</h2>
          
            <Link to='/' className="btn btn-ghost">Go to Home</Link>
            <h1 className="text-center">or</h1>
            <Link to='/login' className="btn btn-ghost">Go to Login</Link>
        </div>
    );
};

export default ErrorPage;