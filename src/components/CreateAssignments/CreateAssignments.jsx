const CreateAssignments = () => {
  const handleCreateAssignments = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const assignmentDifficultyLevel = form.assignmentDifficultyLevel.value;
    const marks = form.marks.value;
    const assignmentDescription = form.assignmentDescription.value;

    const newAssignment = { title, thumbnail, assignmentDifficultyLevel, marks, assignmentDescription };
    console.log(newAssignment);
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                {" "}
                <span className="text-[#ee4747]">Create </span>Assignment!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleCreateAssignments}
                className="card-body w-96 backdrop-blur-lg"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Assignment Title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Thumbnail</span>
                  </label>
                  <input
                    type="url"
                    name="thumbnail"
                    placeholder="Assignment Thumbnail"
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
                    <span className="label-text">Marks</span>
                  </label>
                  <input
                    type="text"
                    name="marks"
                    placeholder="Assignment Marks"
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
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                    Add Product
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

export default CreateAssignments;
