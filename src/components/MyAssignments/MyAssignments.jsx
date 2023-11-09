import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import MyAssignment from "../MyAssignment/MyAssignment";

const MyAssignments = () => {
    const { user } = useContext(AuthContext);

    const [myAssignments, setMyAssignments] = useState([]);


    const url = `http://localhost:5000/mySubmissions?submitterEmail=${user.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => setMyAssignments(data))
    })

    console.log(myAssignments)

    
    return (
        <div>
            <h1 className="text-center font-bold text-4xl">My Assignments Section</h1>
            <div>
                {
                    myAssignments.map(
                        (myAssignment) => <MyAssignment key={myAssignment._id} myAssignment={myAssignment}></MyAssignment>
                    )
                }
            </div>
        </div>
    );
};

export default MyAssignments;