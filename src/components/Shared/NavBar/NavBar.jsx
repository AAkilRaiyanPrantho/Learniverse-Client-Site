import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-orange-100 border-y-2 border-orange-200">
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
                <NavLink>Home</NavLink>
              </li>
              <li>
                <a>Assignments</a>
                <ul className="p-2">
                  <li>
                    <NavLink>All Assignments</NavLink>
                  </li>
                  <li>
                    <NavLink>My Assignments</NavLink>
                  </li>
                  <li>
                    <NavLink>Submitted Assignments</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink>Create Assignments</NavLink>
              </li>
            </ul>
          </div>
          <Link to={'/'}>LearniVerse</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Assignments</summary>
                <ul className="p-2">
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
        <div className="navbar-end">
          <ul>
            <li>
            <NavLink to={'/signUp'}><button className="btn btn-ghost">Register</button></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
