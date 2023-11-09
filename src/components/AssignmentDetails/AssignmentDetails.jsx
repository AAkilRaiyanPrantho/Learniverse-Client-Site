// import { Link,  useLoaderData ,useParams } from "react-router-dom";

import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);

  const handleAssignmentSubmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdf = form.pdf.value;
    const note = form.note.value;
    const submitterName = user.displayName;
    const submitterEmail = user.email;

    const submittedAssignment = { pdf, note, submitterName, submitterEmail };
    console.log(submittedAssignment);

    // Sending submissions to the server
    fetch("http://localhost:5000/submissions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations",
            text: "Submission Successful!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const details = useLoaderData();
  const { id } = useParams();
  // console.log(id)
  // const {title,thumbnail,assignmentDescription} = details;
  // console.log(details[2])
  // console.log(title,thumbnail,assignmentDescription);
  const idInt = parseInt(id);
  console.log(idInt);
  const detail = details.find((detail) => detail._id == id);
  const { title, thumbnail, assignmentDescription, dueDate } = detail;
  console.log(title, thumbnail, assignmentDescription, dueDate);
  return (
    <div>
      <div className="flex flex-col justify-center items-center max-lg:p-4 lg:p-20">
        <div className="mb-4">
          <figure>
            <img
              src={thumbnail}
              className="w-full h-[300px] lg:w-[1500px] lg:h-[850px]"
              alt={title}
            />
          </figure>
        </div>
        <div className="flex flex-col items-center mb-4 max-lg:p-4 lg:px-36">
          <h1 className="my-6 text-[#ee4747] font-bold text-4xl">{title}</h1>
          <p className="my-4 font-semibold text-xl">{assignmentDescription}</p>
          <p className="my-4 text-2xl text-red-700">Due Date: {dueDate}</p>
        </div>
        <div className="mb-4">
          {/* <Link to={`/allAssignments`}><button className="btn btn-ghost outline outline-[#ee4747] text-[#ee4747]">
            Attempt Assignment
          </button></Link> */}

          <button
            className="btn btn-outline btn-success"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Take Assignment
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form
                onSubmit={handleAssignmentSubmission}
                className="flex flex-col gap-4 form-control"
                method="dialog"
              >
                <div>
                  <label className="label">
                    <span className="label-text">Submit Your PDF Link</span>
                  </label>
                  <input
                    type="url"
                    name="pdf"
                    placeholder="Assignment PDF"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Quick Note</span>
                  </label>
                  <input
                    type="text"
                    name="note"
                    placeholder="Quick Note"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-outline btn-info">Submit</button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
        <div className="mb-4">
          <Link to={`/allAssignments`}>
            <button className="btn btn-ghost outline outline-[#ee4747] text-[#ee4747]">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
