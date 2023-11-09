import PropTypes from "prop-types";

const SingleAssignment = ({submission}) => {
    const {
        _id,
        pdf,
        note,
        submitterName,
        submitterEmail,
        assignmentTitle,
        total,
        status,
        marks,
      } = submission;
      console.log(
        _id,
        pdf,
        note,
        submitterName,
        submitterEmail,
        assignmentTitle,
        total,
        status,
        marks
      );
    return (
        <div>
            <div className="card w-96 glass shadow-xl shadow-orange-300">
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <p className="font-semibold">Submitted By: {submitterName}</p>
          <p>Status: {status}</p>
          <p>Total Marks: {total}</p>
          <p>My Obtained Marks: {marks}</p>
          <div className="mb-4">
          {/* <Link to={`/allAssignments`}><button className="btn btn-ghost outline outline-[#ee4747] text-[#ee4747]">
            Attempt Assignment
          </button></Link> */}

          <button
            className="btn btn-outline btn-warning"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Examine Assignment
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div>
                <h1>Answer Script</h1>
                <p>{pdf}</p>
                <h1>Additional Note</h1>
                <p>{note}</p>
              </div>
              <form
                // onSubmit={handleAssignmentSubmission}
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
                    <span className="label-text">Status</span>
                  </label>
                  <select
                    id="assignmentStatus"
                    name="Status"
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
          </dialog>
        </div>
          
        </div>
      </div>
        </div>
    );
};

SingleAssignment.propTypes = {
    submission: PropTypes.object,
  };

export default SingleAssignment;