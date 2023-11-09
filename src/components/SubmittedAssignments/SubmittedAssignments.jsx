import { useLoaderData } from "react-router-dom";
import SingleAssignment from "../SingleAssignment/SingleAssignment";


const SubmittedAssignments = () => {
    const submissions = useLoaderData();
    console.log(submissions);
    return (
        <div>
           <h1 className="text-center font-bold text-4xl">Submitted Assignments Section</h1> 
          <div>
            {
                submissions.map(
                    (submission) => ( <SingleAssignment key={submission._id} submission={submission}></SingleAssignment> )
                )
            }
          </div>
        </div>
    );
};

export default SubmittedAssignments;