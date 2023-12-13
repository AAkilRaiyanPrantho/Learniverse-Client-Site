import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import MyAssignment from "../MyAssignment/MyAssignment";

const MyAssignments = () => {
    const { user } = useContext(AuthContext);

    const [myWorks, setMyWorks] = useState([]);


    const url = `https://programming-hero-assignment-11-server.vercel.app/mySubmissions?submitterEmail=${user?.email}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => setMyWorks(data))
    },[])

    console.log(myWorks)

    
    return (
        <div>
            <h1 className="text-center font-bold text-4xl">My Assignments Section</h1>
            {/* <h1>Total Assignments: {myWorks.length}</h1> */}
            <div className="grid max-lg:grid-cols-1 p-4 gap-y-4 lg:grid-cols-3 lg:w-3/4 lg:mx-auto lg:my-8 md:max-lg:flex md:max-lg:flex-col md:max-lg:justify-center md:max-lg:items-center">
                {
                    myWorks.map(
                        (myWork) => <MyAssignment key={myWork._id} myWork={myWork}></MyAssignment>
                    )
                }
            </div>
        </div>
    );
};

export default MyAssignments;