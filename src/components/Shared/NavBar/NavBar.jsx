import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { useContext } from "react";
import { FaDoorOpen,FaGraduationCap } from "react-icons/fa6";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged Out"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-orange-100 border-y-2 border-orange-200 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a>Assignments</a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/allAssignments">All Assignments</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myAssignments">My Assignments</NavLink>
                  </li>
                  <li>
                    <NavLink to="/submittedAssignments">
                      Submitted Assignments
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/createAssignments">Create Assignments</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"}><div className="flex justify-center items-center"><FaGraduationCap className="text-3xl text-[#ec0d6a] font-extrabold"></FaGraduationCap><p>
            <span className="text-[#9234eb] font-extrabold text-3xl">L</span>EARNi
            <span className="text-[#ec4899] font-extrabold text-3xl">V</span>
            ERSE
          </p></div></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Assignments</summary>
                <ul className="flex w-[500px] p-2 gap-4 bg-orange-100 border-y-1 border-orange-200">
                  <li>
                    <NavLink to="/allAssignments">All Assignments</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/myAssignments"}>My Assignments</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/submittedAssignments"}>
                      Submitted Assignments
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to={"/createAssignments"}>Create Assignments</NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <>
            {" "}
            <div className="navbar-end">
              <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={`${user.displayName}`}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user.photoURL ? (
                      <>
                        <img src={user.photoURL} alt="" />
                      </>
                    ) : (
                      <>
                        <img
                          src="https://i.ibb.co/S68L7kq/Photo-not-available-man.jpg"
                          alt=""
                        />
                      </>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 border-y-1 border-orange-200 rounded-box w-52"
                >
                  {/* <li>
                    <p>{user ? <span>{user.displayName}</span> : user.email}</p>
                  </li> */}
                  <li>
                    <a onClick={handleLogOut}>Logout<FaDoorOpen/></a>
                  </li>
                </ul>
                {/* <div>
                <button onClick={handleLogOut} className="btn glass"><FaDoorOpen/></button>
                </div> */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end">
              <ul>
                <li>
                  <NavLink to={"/signUp"}>
                    <button className="btn btn-ghost">Register</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
