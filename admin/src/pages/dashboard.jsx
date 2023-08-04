import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    console.log("Logout handler");
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-[#FFFFFF] p-4 h-screen">
        <img src={logo} alt="logo" />
        <div className="border-b-2 mt-3"></div>

        <div className="flex flex-col  items-center space-y-4 text-2xl font-semibold mt-4">
          <Link to={"rooms"} className="cursor-pointer">
            Rooms
          </Link>
          <Link to={"bookings"} className="cursor-pointer">
            Bookings
          </Link>
          <Link to={"users"} className="cursor-pointer">
            Users
          </Link>
          <button onClick={logoutHandler} className="cursor-pointer">
            Logout
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
