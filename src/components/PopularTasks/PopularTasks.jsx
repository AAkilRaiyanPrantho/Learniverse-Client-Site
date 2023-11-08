
const PopularTasks = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Feature Section</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto my-8">
        {/* card1 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/y5gDC9G/Cards-1.jpg"
              alt="course1"
            />
          </figure>
          <div className="card-body justify-center items-center my-auto backdrop-blur-sm">
            <h2 className="card-title">Assignment Creation</h2>
            <p>Registered users can create assignments for others to participate</p>
          </div>
        </div>
        {/* card2 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/mRN39L5/Cards-2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-center my-auto backdrop-blur-sm">
            <h2 className="card-title">Assignment Attempt</h2>
            <p>Only registered users can participate in the assignments but everyone can browse the All Assignment page</p>
          </div>
        </div>
        {/* card3 */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/FwnJHnG/Cards-3.png"

              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center items-center my-auto backdrop-blur-sm">
            <h2 className="card-title">Sorting Assignments</h2>
            <p>There are three difficulty levels of assignments. So users can toggle and sort how they want to see the all assignment page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTasks;
