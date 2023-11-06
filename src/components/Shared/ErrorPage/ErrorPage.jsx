import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center p-4 hero min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/Mp9f2hY/dark-forest-background-ncekxir0j5a9qd8k.jpg)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-y-4 backdrop-blur-sm lg:p-20">
      <h1 className="text-6xl font-extrabold text-[#5cc6f0]">Oh No!!!!</h1>
      <h2 className="text-4xl font-bold text-[#66ccfc]">Wrong Turn</h2>
      <button className="btn btn-ghost outline outline-[#66FCF1] text-[#66FCF1]">
        <Link to="/">Go Back</Link>
      </button>
      </div>
    </div>
  );
};

export default ErrorPage;
