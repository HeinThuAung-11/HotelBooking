import { Navbar } from "./navbar";
import { Searchroom } from "./search-room";
import roomImage from "../images/roomtab.jpeg";
export const RoomDisplay = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${roomImage})`,
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
        <div className="flex justify-center h-1/6">
          <Searchroom />
        </div>
      </div>
    </div>
  );
};
