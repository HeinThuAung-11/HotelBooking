import { Dash } from "../components/dash";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchRoom, getAllRooms } from "../features/room/roomSlice";
import { Title } from "../components/title";
export const Rooms = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(getAllRooms);
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  console.log("roomns", rooms);
  return (
    <Dash>
      <Title />
    </Dash>
  );
};
