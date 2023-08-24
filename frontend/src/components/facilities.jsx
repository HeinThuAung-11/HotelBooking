import { Navbar } from "./navbar";
import facilityImage from "../images/facilities.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";
import { FacilitiesInfo } from "./facilites-info";
export const Facilities = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${facilityImage})`,
        }}
        className="bg-cover">
        <div className="backdrop-brightness-50 h-screen w-full  pt-4 px-20">
          <Navbar />
          <div className="flex flex-col items-start justify-center h-4/6 text-background">
            <h3 className="text-4xl">WELCOME TO</h3>
            <h1 className="text-[#E0B973] text-7xl">ROYAL GARDEN</h1>
            <h2 className="text-[#E0B973] text-5xl">HOTEL</h2>
            <p className="text-xl leading-loose">
              Book your stay and enjoy Luxury redefined at the most
              affordable rates.
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="contained"
              onClick={() => navigate("/room-display")}
              style={{
                backgroundColor: "#14274A",
                width: 300,
                height: 50,
                color: "#E0B973",
                fontSize: 20,
                fontWeight: 600,
              }}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <FacilitiesInfo />
      <Footer />
    </>
  );
};
