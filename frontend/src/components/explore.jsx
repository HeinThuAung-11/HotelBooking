import { Link } from "react-router-dom";
import restaurantImage from "../images/restaurant.jpg";
import roomImage from "../images/room.jpg";

export const Explore = () => {
  return (
    <div className="flex gap-5 items-center">
      <Link to={"/"}>
        <article className="relative overflow-hidden rounded-lg shadow transition transform hover:scale-105 hover:shadow-lg w-[450px] h-[300px]">
          <img
            alt="Office"
            src={restaurantImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center backdrop-filter hover:backdrop-blur-sm">
            <div className="bg-black bg-opacity-50 p-4 sm:p-6 text-center">
              <h3 className="text-2xl text-white font-bold mb-2">
                Restuarant
              </h3>

              <p className="text-white text-opacity-80">
                Welcome to our exquisite restaurant, where culinary
                delights meet in a fusion of flavors, offering a
                memorable dining experience for all tastes.
              </p>
            </div>
          </div>
        </article>
      </Link>
      <Link to={"/rooms"}>
        <article className="relative overflow-hidden rounded-lg shadow transition transform hover:scale-105 hover:shadow-lg w-[450px] h-[300px]">
          <img
            alt="Office"
            src={roomImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center backdrop-filter hover:backdrop-blur-sm">
            <div className="bg-black bg-opacity-50 p-4 sm:p-6 text-center">
              <h3 className="text-2xl text-white font-bold mb-2">
                Rooms
              </h3>

              <p className="text-white text-opacity-80">
                Step into your own haven of comfort and luxury, our
                hotel rooms are thoughtfully designed to provide a
                relaxing escape, making your stay truly unforgettable.
              </p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};
