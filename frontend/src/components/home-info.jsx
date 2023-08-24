import home1 from "./../images/home1.png";
import home2 from "./../images/home2.png";
export const HomeInfo = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <h1 className="text-center my-10 gap-6 text-xl font-semibold  ">
        All our room types include complementary breakfast
      </h1>
      <div className="grid grid-cols-12">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="335"
            viewBox="0 0 3 335"
            fill="none">
            <path
              d="M1.5 0.5V334.5"
              stroke="#14274A"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="flex flex-col col-start-2 col-end-6  justify-center">
          <h1 className="text-xl font-bold">Luxury redefined</h1>
          <p className="text-lg font-semibold my-4">
            Our rooms are designed to transport you into an
            environment made for leisure. Take your mind off the
            day-to-day of home life and find a private paradise for
            yourself.
          </p>
        </div>
        <img
          src={home1}
          alt="home"
          className="col-start-7 col-end-13"
        />
      </div>
      <div className="grid grid-cols-12 my-8">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="335"
            viewBox="0 0 3 335"
            fill="none">
            <path
              d="M1.5 0.5V334.5"
              stroke="#14274A"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="flex flex-col col-start-2 col-end-6  justify-center">
          <h1 className="text-xl font-bold">
            Leave your worries in the sand
          </h1>
          <p className="text-lg font-semibold my-4">
            We love life at the beach. Being close to the ocean with
            access to endless sandy beach ensures a relaxed state of
            mind. It seems like time stands still watching the ocean.
          </p>
        </div>
        <img
          src={home2}
          alt="home"
          className="col-start-7 col-end-13"
        />
      </div>
    </div>
  );
};
