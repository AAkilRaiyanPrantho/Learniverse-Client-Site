import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";

import { FcGoogle } from "react-icons/fc";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";



const SignIn = () => {

  

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("Google Button Working");
    signInWithPopup(auth,provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      notify1();
    })
    .catch(error => {
      console.log('error',error.message);
      notify2();
    })
  };

  const [signInError, setSignInError] = useState("");

  const [signInSuccess, setSignInSuccess] = useState("");

  const authInfo = useContext(AuthContext);
  const { signInUser } = authInfo;

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // clear error
    setSignInError("");
    setSignInSuccess("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        if (result.user.emailVerified) {
          setSignInSuccess("Sign In Successful");
          notify1();
        } else {
          notify3();
        }
      })
      .catch((error) => {
        console.error(error);
        setSignInError(error.message);
        notify2();
      });
  };

  const notify2 = () => toast(signInError);
  console.log(signInError);

  const notify1 = () => toast("Sign In Successful!!!");

  const notify3 = () => toast("Please Verify Your Email!!!");

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              <span className="text-[#ee4747]">Sign</span> In now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body w-96 backdrop-blur-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mx-auto">
                <p className="mt-4">
                  Not a member yet?{" "}
                  <Link to="/signUp">
                    <span className="text-[#ee4747]">Join Us</span>
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                  Sign In
                </button>
                <ToastContainer />
              </div>
            </form>
            {signInError && <p className="text-red-800">{signInError}</p>}
            {signInSuccess && <p className="text-green-800">{signInSuccess}</p>}
            <div className="mx-auto my-2">
              <button
                onClick={handleGoogleSignIn}
                className="btn outline outline-[#ee4747] text-[#ee4747] text-3xl my-2"
              >
                <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;