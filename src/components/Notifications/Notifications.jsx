import Marquee from "react-fast-marquee";

const Notifications = () => {
  return (
    <div className="my-4">
        <h1 className="text-center font-bold text-4xl mb-4">Upcoming Notifications</h1>
      <Marquee>
        <h1 className="text-xl font-bold text-red-600">| <span className="text-2xl">A</span>ll activities will remain closed due to Victory Day on 16 December 2023 | </h1><br />
        <h1 className="text-xl font-bold text-red-600"> | <span className="text-2xl">A</span>ll due assignments must be submitted before 25th of December for yearly evaluation | </h1>
        <h1 className="text-xl font-bold text-red-600">| <span className="text-2xl">2</span>5th of December Christmas Holiday |</h1>
      </Marquee>
    </div>
  );
};

export default Notifications;
