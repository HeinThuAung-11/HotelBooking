import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import { useSelector } from "react-redux";
import {
  apiGetUser,
  selectAuth,
  selectUser,
} from "../features/authSlice";
import Account from "./account";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export const Navbar = () => {
  let { token } = useSelector(selectAuth);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const getUserInfoFromToken = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken; // The decoded payload will contain user information
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
  useEffect(() => {
    if (token) {
      const userInfo = getUserInfoFromToken(token);
      dispatch(apiGetUser(userInfo));
    }
  }, [token, dispatch]);
  return (
    <div className="grid grid-cols-2 text-background">
      <img
        src={logo}
        alt="logo"
        className="col-span-1 w-[200px] h-[70px]"
      />
      <div className="col-span-1 flex items-center justify-evenly font-semibold text-lg">
        <Link to={"/"}>Home</Link>
        <Link to={"/room-display"}>Room</Link>
        <Link to={"/facilities"}>Facilities</Link>
        {!token ? (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        ) : (
          <Account user={user} />
        )}
      </div>
    </div>
  );
};
