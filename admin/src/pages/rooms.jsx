import { Dash } from "../components/dash";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchRoom, getAllRooms } from "../features/room/roomSlice";
export const Rooms = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector(getAllRooms);
  useEffect(() => {
    dispatch(fetchRoom());
  }, [dispatch]);
  console.log("roomns", rooms);
  return <Dash>hello</Dash>;
};
