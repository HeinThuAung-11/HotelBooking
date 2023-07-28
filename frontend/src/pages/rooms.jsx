import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchRoom, getAllRooms } from "../features/roomSlice";
import { Searchroom } from "../components/search-room";
import { RoomList } from "../components/room-list";
import { NavbarHome } from "../components/navbarHome";

export const Room = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(getAllRooms);
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  console.log(rooms);
  return (
    <>
      <NavbarHome />

      <div className="grid grid-cols-3 grid-rows-1 gap-2 px-56 mt-8">
        <div className="col-span-1">
          <Searchroom />
        </div>
        <div className="col-span-2">
          {rooms
            ? rooms.map((room) => {
                return <RoomList room={room} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};
