// import { useContext } from "react";
import Swal from "sweetalert2";
// import { AuthContext } from "../AuthProviders/AuthProvider";
import { useLoaderData } from "react-router-dom";


const SingleAssignmentChecking = () => {

    const data = useLoaderData();
    console.log(data)
    const {_id,pdf,note} = data;


    // handleFunction
    const handleCheckingAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const givenMarks = form.givenMarks.value;
        const status = form.status.value;
        const feedback = form.feedback.value;
        
    
        const checkedAssignment = {givenMarks,status,feedback };
        console.log(checkedAssignment);
    
    
        // Sending updated assignment to the server
        fetch(`https://programming-hero-assignment-11-server.vercel.app/submissions/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(checkedAssignment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Congratulations',
              text: 'Marks Given!',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
    
          }
        })
      };
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">
                {" "}
                <span className="text-[#ee4747]">Check </span>Assignment!
              </h1>
            <div>
                <h1 className="border-2">Answer Script</h1>
                <p className="border-2">{pdf}</p>
                <h1 className="border-2">Additional Note</h1>
                <p className="border-2">{note}</p>
              </div>
              <form
                onSubmit={handleCheckingAssignment}
                className="flex flex-col gap-4 form-control"
                method="dialog"
              >
                <div>
                  <label className="label">
                    <span className="label-text">Give Marks</span>
                  </label>
                  <input
                    type="text"
                    name="givenMarks"
                    placeholder="Give Marks"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Give Feedback</span>
                  </label>
                  <input
                    type="text"
                    name="feedback"
                    placeholder="Give Feedback"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <select
                    id="assignmentStatus"
                    name="status"
                    className="p-4 border-2 rounded-lg"
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Checked">Checked</option>
                    
                  </select>
                </div>
                <div>
                  <button className="btn btn-outline btn-info">Give Mark</button>
                </div>
              </form>
            </div>
        </div>
    );
};

export default SingleAssignmentChecking;