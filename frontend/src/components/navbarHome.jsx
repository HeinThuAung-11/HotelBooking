import { CiMenuBurger } from "react-icons/ci";
import Button from "@mui/material/Button";
export const NavbarHome = () => {
  return (
    <div className="lg:pt-5 flex justify-evenly items-center h-1/6">
      <CiMenuBurger className="h-7 w-7" />
      <h1> Royal Garden Hotel</h1>
      <div className="flex gap-3">
        <Button
          style={{
            color: "#FFFFFF", // Text color
            borderColor: "#491098", // Border color
          }}
          variant="outlined"
          className="rounded w-[100px] ">
          Login
        </Button>
        <Button
          style={{
            backgroundColor: "#491098", // Background color
            color: "#FFFFFF", // Text color
          }}
          variant="contained"
          className="rounded w-[100px]">
          Register
        </Button>
      </div>
    </div>
  );
};
