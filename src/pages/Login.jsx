/** @format */
import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  const { signIn, signInGoogle,signInGithub } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

      //login user
    signIn(email, password)
        .then(() => {
            navigate('/')
            Swal.fire({
                title: "Good job!",
                text: "Login Successfully",
                icon: "success",
              });
        
      })
        .catch((error) => {
            navigate('/login')
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Don't match password",
              });
            
      });
    };
    
    
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
            navigate('/')
            Swal.fire({
                title: "Good job!",
                text: "Login Successfully",
                icon: "success",
              });
      
      })
        .catch((error) => {
         Swal.fire({
            icon: "error",
            title: "Error",
            text: "Don't match password",
          });
    })
    }
  const handleGithubSignIn = () => {
    signInGithub()
      .then(() => {
        navigate('/')
        Swal.fire({
          title: "Good job!",
          text: "Login Successfully",
          icon: "success",
        });
      })
        .catch((error) => {
            console.log(error)
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Don't match password",
        });
      })
  }

  return (
    <div className="my-4">
      
      <div className="md:w3/4 lg:w-1/2 mx-auto p-2 border rounded-xl bg-slate-100">
        <h1 className="my-4 text-xl text-center font-semibold">Login</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPass ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered" required />
            <span className=" absolute top-14 right-4 " onClick={() => setShowPass(!showPass)}>
              {showPass ? <IoEyeOff /> : <IoEye />}
            </span>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
          </div>
        </form>
        
              
              <p className=" flex gap-8 justify-center"><button onClick={ handleGoogleSignIn } className="btn btn-outline">With Google</button>
              <button onClick={handleGithubSignIn} className="btn btn-outline">With Github</button>
              </p>
              <hr className="mx-16 my-4" />
              <p className="text-center mb-2">
          Do not have an account?
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
              </p>
      </div>
    </div>
  );
};

export default Login;
