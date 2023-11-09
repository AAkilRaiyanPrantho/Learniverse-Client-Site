import { useLoaderData } from "react-router-dom";
import AllAssignment from "../AllAssignment/AllAssignment";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";


const AllAssignments = () => {
  const assignments = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(user)

  return (
    <div>
      <h1 className="text-center font-bold text-4xl">All Assignment Section</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        {assignments.map((assignment) => (
          <AllAssignment key={assignment._id} assignment={assignment}></AllAssignment>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
