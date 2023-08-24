import gym from "./../images/gym.png";
import restaurant from "./../images/restaurant.jpg";
import swimmingpool from "./../images/swimmingpool.png";
import poolbar from "./../images/poolbar.png";

export const FacilitiesInfo = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <h1 className="text-center my-10 gap-6 text-2xl font-bold">
        FACILITIES
      </h1>
      <p className="max-w-[1200px] mx-auto text-lg font-semibold text-center mb-6">
        We want your stay at our lush hotel to be truly unforgettable.
        That is why we give special attention to all of your needs so
        that we can ensure an experience quite uniquw. Luxury hotels
        offers the perfect setting with stunning views for leisure and
        our modern luxury resort facilities will help you enjoy the
        best of all.{" "}
      </p>
      <div className="w-full h-full relative my-6">
        <img src={gym} alt="gym" />
        <div className="flex justify-center">
          <p className="bg-[#fff] absolute bottom-0 mx-auto w-[600px] text-center text-2xl font-bold text-[#E0B973]">
            THE GYM
          </p>
        </div>
      </div>
      <div className="w-full h-full relative my-6">
        <img src={restaurant} alt="gym" />
        <div className="flex justify-center">
          <p className="bg-[#fff] absolute bottom-0 mx-auto w-[600px] text-center text-2xl font-bold text-[#E0B973]">
            THE RESTAURANT
          </p>
        </div>
      </div>
      <div className="w-full h-full relative my-6">
        <img src={poolbar} alt="gym" />
        <div className="flex justify-center">
          <p className="bg-[#fff] absolute bottom-0 mx-auto w-[600px] text-center text-2xl font-bold text-[#E0B973]">
            THE POOLSIDE BAR
          </p>
        </div>
      </div>
      <div className="w-full h-full relative my-6">
        <img src={swimmingpool} alt="gym" />
        <div className="flex justify-center">
          <p className="bg-[#fff] absolute bottom-0 mx-auto w-[600px] text-center text-2xl font-bold text-[#E0B973]">
            THE SWIMMING POOL
          </p>
        </div>
      </div>
    </div>
  );
};
