import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
export const Navbar = () => {
  return (
    <div className="grid grid-cols-2">
      <img
        src={logo}
        alt="logo"
        className="col-span-1 w-[200px] h-[70px]"
      />
      <div className="col-span-1 flex items-center justify-evenly font-semibold text-lg">
        <Link to={"/"}>Home</Link>
        <Link to={"/roomdisplay"}>Room</Link>
        <Link to={"/rooms"}>Restuarant</Link>
        <Link to={"/"}>Login</Link>
        <Link to={"/"}>Register</Link>
      </div>
    </div>
  );
};
