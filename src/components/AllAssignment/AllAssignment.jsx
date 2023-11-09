import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useContext } from "react";

const AllAssignment = ({ assignment }) => {
  const {
    _id,
    title,
    thumbnail,
    assignmentDifficultyLevel,
    marks,
    assignmentDescription,
    dueDate,
    assignmentCreatorName,assignmentCreatorMail
  } = assignment;

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

  const {user,loading} = useContext(AuthContext);
  console.log(user)

  if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}




  const handleError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You Don't have authority for this",
      
    });
  }

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log('delete confirmed')

        fetch(`https://programming-hero-assignment-11-server.vercel.app/assignments/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
          title: "Deleted!",
          text: "Assignment has been deleted.",
          icon: "success"
        });
          }
        })
        
      }
    });
    
  }
  

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
            <Link to={`/details/${_id}`}><button className="btn btn-info">View Assignment</button></Link>
            <Link to={`/updateAssignments/${_id}`}><button className="btn btn-success">Update Assignment</button></Link>
            {user.email === assignmentCreatorMail ? (<button onClick={() => handleDelete(_id)} className="btn btn-error">Delete Assignment</button>):(<button onClick={(handleError)} className="btn btn-error">Delete Assignment</button>)}
            
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
