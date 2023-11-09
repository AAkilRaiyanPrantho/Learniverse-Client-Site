import PropTypes from "prop-types";

const MyAssignment = ({myAssignment}) => {
    const {_id,pdf,note,submitterName,submitterEmail} = myAssignment;
    console.log(_id,pdf,note,submitterName,submitterEmail);
    return (
        <div>
            
        </div>
    );
};

MyAssignment.propTypes = {
    myAssignment: PropTypes.object,
  };

export default MyAssignment;