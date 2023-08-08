import { Explore } from "../components/explore";
import { NavbarHome } from "../components/navbarHome";
import homeImage from "../images/background.jpg";
export const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeImage})`,
      }}
      className="h-screen w-full bg-cover text-background">
      <NavbarHome />
      <div
        className="flex flex-col items-center justify-evenly h-5/6
      ">
        <p className="text-center w-[700px] font-bold text-2xl antialiased leading-loose">
          Experience the epitome of luxury and unparalleled
          hospitality at our exquisite hotel. Discover a haven of
          comfort and elegance that will exceed your expectations.
        </p>
        <Explore />
      </div>
    </div>
  );
};
