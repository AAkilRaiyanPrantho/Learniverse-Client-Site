import { useLoaderData } from "react-router-dom";
import AllAssignment from "../AllAssignment/AllAssignment";


const AllAssignments = () => {
  const assignments = useLoaderData();

  return (
    <div>
      <h1 className="text-center font-bold text-4xl">All Assignment Section</h1>
      <div>
        {assignments.map((assignment) => (
          <AllAssignment key={assignment._id} assignment={assignment}></AllAssignment>
        ))}
      </div>
    </div>
  );
};

export default AllAssignments;
