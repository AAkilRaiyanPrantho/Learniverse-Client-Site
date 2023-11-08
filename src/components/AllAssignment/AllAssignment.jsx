import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllAssignment = ({ assignment }) => {
  const {
    _id,
    title,
    thumbnail,
    assignmentDifficultyLevel,
    marks,
    assignmentDescription,
    dueDate,
    assignmentCreatorName,
  } = assignment;

  console.log(
    _id,
    title,
    thumbnail,
    assignmentDifficultyLevel,
    marks,
    assignmentDescription,
    dueDate,
    assignmentCreatorName
  );

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl lg:h-96">
        <figure className="p-4 lg:w-3/4 ">
          <img
          className="h-full"
            src={thumbnail}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Total Marks: {marks}</p>
          <p className="badge badge-primary badge-outline w-16">{assignmentDifficultyLevel}</p>
          <p>Created By {assignmentCreatorName}</p>
          <p>Due Date: {dueDate}</p>
          <div className="card-actions justify-center">
            <Link to={`/details/:${_id}`}><button className="btn btn-info">View Assignment</button></Link>
            
            <button className="btn btn-success">Update Assignment</button>
            <button className="btn btn-error">Delete Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AllAssignment.propTypes = {
  assignment: PropTypes.object,
};

export default AllAssignment;
