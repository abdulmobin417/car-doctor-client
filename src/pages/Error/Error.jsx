import error from "../../assets/error.png";
import NavBar from "../Shared/NavBar/NavBar";

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <NavBar />
      <div className="flex justify-center items-center mt-[10%]">
        <img src={error} className="" alt="" />
      </div>
    </div>
  );
};

export default Error;
