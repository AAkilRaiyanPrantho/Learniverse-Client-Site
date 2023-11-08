import PropTypes from "prop-types";

const AllAssignment = ({assignment}) => {

    const{_id,title,thumbnail,assignmentDifficultyLevel,marks,assignmentDescription,dueDate,assignmentCreatorName} = assignment;

    console.log(_id,title,thumbnail,assignmentDifficultyLevel,marks,assignmentDescription,dueDate,assignmentCreatorName)

    return (
        <div>
            
        </div>
    );
};

AllAssignment.propTypes = {
    assignment: PropTypes.object,
  };

export default AllAssignment;