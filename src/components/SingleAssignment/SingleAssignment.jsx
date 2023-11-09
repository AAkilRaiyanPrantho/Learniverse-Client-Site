import PropTypes from "prop-types";

const SingleAssignment = ({submission}) => {
    const{_id,pdf,note,submitterName,submitterEmail} = submission;
    console.log(_id,pdf,note,submitterName,submitterEmail)
    return (
        <div>
            
        </div>
    );
};

SingleAssignment.propTypes = {
    submission: PropTypes.object,
  };

export default SingleAssignment;