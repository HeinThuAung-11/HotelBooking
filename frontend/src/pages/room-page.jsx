import { IndividualRoom } from "../components/individaul-room";
import { RoomDisplay } from "../components/room-display";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchRoom,
  getAllRooms,
  getFilteredRooms,
} from "../features/roomSlice";
import { Footer } from "../components/footer";
export const RoomPage = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(getAllRooms);
  const filteredRooms = useAppSelector(getFilteredRooms);
  console.log("filterroom", filteredRooms);
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);

  return (
    <>
      <RoomDisplay />
      <div className="my-6 text-[#14274A]">
        <h1 className="text-center text-3xl font-semibold  mb-3 ">
          ROOMS AND RATES
        </h1>
        <p className="mx-auto max-w-[1000px] antialiased text-xl text-center">
          Each of our bright, light-flooded rooms come with everything
          you could possibly need for a comfortable stay. And yes,
          comfort isn’t our only objective, we also value good design,
          sleek contemporary furnishing complemented by the rich tones
          of nature’s palette as visible from our rooms’ sea-view
          windows and terraces.{" "}
        </p>
      </div>
      {filteredRooms.length > 0
        ? filteredRooms.map((room, index) => {
            return <IndividualRoom room={room} key={room + index} />;
          })
        : rooms
        ? rooms.map((room, index) => {
            return <IndividualRoom room={room} key={room + index} />;
          })
        : null}

      <Footer />
    </>
  );
};
