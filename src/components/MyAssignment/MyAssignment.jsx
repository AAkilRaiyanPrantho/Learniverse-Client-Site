import PropTypes from "prop-types";

const MyAssignment = ({ myWork }) => {
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
  } = myWork;
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
          
        </div>
      </div>
    </div>
  );
};

MyAssignment.propTypes = {
  myWork: PropTypes.object,
};

export default MyAssignment;
