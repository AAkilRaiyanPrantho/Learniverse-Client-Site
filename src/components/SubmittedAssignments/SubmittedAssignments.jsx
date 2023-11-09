import { useLoaderData } from "react-router-dom";
import SingleAssignment from "../SingleAssignment/SingleAssignment";

const SubmittedAssignments = () => {
  const submissions = useLoaderData();
  console.log(submissions);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">
        Submitted Assignments Section
      </h1>
      <div className="grid max-lg:grid-cols-1 p-4 gap-y-4 lg:grid-cols-3 lg:w-3/4 lg:mx-auto lg:my-8 md:max-lg:flex md:max-lg:flex-col md:max-lg:justify-center md:max-lg:items-center">
        {submissions.map((submission) => (
          <SingleAssignment
            key={submission._id}
            submission={submission}
          ></SingleAssignment>
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
