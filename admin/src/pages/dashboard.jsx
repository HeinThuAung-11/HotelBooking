import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
export const Dashboard = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 bg-[#64748B] p-4 h-screen">
        <img src={logo} alt="logo" />
        <div className="border-b-2 mt-3"></div>

        <div className="flex flex-col text-white items-center space-y-4 text-2xl font-semibold mt-4">
          <Link to={"rooms"} className="cursor-pointer">
            Rooms
          </Link>
          <Link to={"bookings"} className="cursor-pointer">
            Bookings
          </Link>
          <Link to={"users"} className="cursor-pointer">
            Users
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
