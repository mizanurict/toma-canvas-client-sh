/** @format */
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 5) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password should be at least 6 characters",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password should be at least one Uppercase characters",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password should be at least one Lowercase characters",
      });
      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
          })
          .catch(() => {});
        navigate("/");
        Swal.fire({
          title: "Good job!",
          text: "Register Successfully ",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill up form",
        });
      });
  };

  return (
    <div className="my-4">
      <div className="md:w3/4 lg:w-1/2 mx-auto p-2 border rounded-lg bg-slate-100">
        <h1 className="my-2 text-xl text-center font-semibold">Register Form</h1>
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
