import { Link } from "react-router-dom";

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
                <a>Home</a>
              </li>
              <li>
                <a>Assignments</a>
                <ul className="p-2">
                  <li>
                    <a>All Assignments</a>
                  </li>
                  <li>
                    <a>My Assignments</a>
                  </li>
                  <li>
                    <a>Submitted Assignments</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Create Assignments</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">LearniVerse</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Assignments</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/allAssignments">All Assignments</Link>
                  </li>
                  <li>
                    <Link to={"/myAssignments"}>My Assignments</Link>
                  </li>
                  <li>
                    <Link to={"/submittedAssignments"}>
                      Submitted Assignments
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"/createAssignments"}>Create Assignments</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/signUp'}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
