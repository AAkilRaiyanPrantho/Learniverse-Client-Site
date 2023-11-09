import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignments = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const {user} = useContext(AuthContext);
    console.log(user)

    // handleFunction
    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbnail = form.thumbnail.value;
        const assignmentDifficultyLevel = form.assignmentDifficultyLevel.value;
        const marks = form.marks.value;
        const dueDate = form.dueDate.value;
        const assignmentDescription = form.assignmentDescription.value;
        const assignmentCreatorName = user.displayName;
        const assignmentCreatorMail = user.email;
    
        const updatedAssignment = { title, thumbnail, assignmentDifficultyLevel, marks, assignmentDescription,dueDate,assignmentCreatorName,assignmentCreatorMail };
        console.log(updatedAssignment);
    
    
        // Sending updated assignment to the server
        fetch(`https://programming-hero-assignment-11-server.vercel.app/assignments/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedAssignment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Congratulations',
              text: 'Assignment Update Successful!',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
    
          }
        })
      };

    const updates = useLoaderData();
    const {
        _id,
        title,
        thumbnail,
        assignmentDifficultyLevel,
        marks,
        assignmentDescription,
        dueDate,
        assignmentCreatorName,assignmentCreatorMail
      } = updates;
    
      console.log(
        _id,
        title,
        thumbnail,
        assignmentDifficultyLevel,
        marks,
        assignmentDescription,
        dueDate,
        assignmentCreatorName,assignmentCreatorMail
      );

    return (
        <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                {" "}
                <span className="text-[#ee4747]">Update </span>Assignment!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleUpdateAssignment}
                className="card-body w-96 backdrop-blur-lg"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Assignment Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Assignment Title"
                    defaultValue={title}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Assignment Thumbnail</span>
                  </label>
                  <input
                    type="url"
                    name="thumbnail"
                    placeholder="Assignment Thumbnail"
                    defaultValue={thumbnail}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Assignment Difficulty Level</span>
                  </label>
                  <select
                    id="assignmentDifficultyLevel"
                    name="assignmentDifficultyLevel"
                    className="p-4 border-2 rounded-lg"
                    required
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Assignment Marks</span>
                  </label>
                  <input
                    type="text"
                    name="marks"
                    placeholder="Assignment Marks"
                    defaultValue={marks}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Assignment Description</span>
                  </label>
                  <input
                    type="text"
                    name="assignmentDescription"
                    placeholder="Assignment Description"
                    defaultValue={assignmentDescription}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Assignment Due Date</span>
                  </label>
                  <DatePicker name="dueDate" className="input input-bordered w-full" selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
                  {/* <input
                    type="text"
                    name="dueDate"
                    placeholder="Assignment Due Date"
                    className="input input-bordered"
                    required
                  /> */}
                </div>

                <div className="form-control mt-6">
                  <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                    Update Assignment
                  </button>
                </div>
              </form>
              {/* <ToastContainer /> */}
              {/* {signUpError && <p className="text-red-800">{signUpError}</p>} */}
              {/* {signUpSuccess && <p className="text-green-800">{signUpSuccess}</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default UpdateAssignments;