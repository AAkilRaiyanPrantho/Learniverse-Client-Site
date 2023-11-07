import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");

  const [signUpSuccess, setSignUpSuccess] = useState("");

  const authInfo = useContext(AuthContext);

  const { createUser } = authInfo;

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name, photo);

    if (password.length < 6) {
      setSignUpError("Password should be longer that 6 characters");
      notify2();
      return;
    } 
    else if (!/[A-Z]/.test(password)) {
      setSignUpError("Password should have a capital letter");
      notify2();
      return;
    } 
    else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setSignUpError("Password should have a special character");
      notify2();
      return;
    }

    // clear error
    setSignUpError("");
    setSignUpSuccess("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSignUpSuccess("Sign Up Successful");
        notify1();
        e.target.reset();

        // Updating Profile
        updateProfile(result.user, {
          displayName: name, photoURL: photo
        })
        .then( () => console.log('Profile updated'))
        .catch((error) =>{
          console.error(error);
        })

        // verification
        sendEmailVerification(result.user).then(() => {
          console.log("Email Verified");
          notify3();
        });
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
        notify2();
      });
  };

  const notify2 = () => toast(signUpError);
  console.log(signUpError);

  const notify1 = () => toast('Sign Up Successful!!!');

  const notify3 = () => toast('Please Verify Your Email!!!');
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              {" "}
              <span className="text-[#ee4747]">Sign </span>Up now!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body w-96 backdrop-blur-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  
                />
              </div>
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
                  Already a member?{" "}
                  <Link to="/signIn">
                    <span className="text-[#ee4747]">Sign In</span>
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn outline outline-[#ee4747] text-[#ee4747]"
                >Sign Up
                </button>
              </div>
            </form>
            <ToastContainer />
            {signUpError && <p className="text-red-800">{signUpError}</p>}
            {signUpSuccess && <p className="text-green-800">{signUpSuccess}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;