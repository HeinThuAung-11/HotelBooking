import { Dash } from "../components/dash";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchRoom, getAllRooms } from "../features/room/roomSlice";
import { Title } from "../components/title";
import { Button } from "@mui/material";

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
      <div className="grid grid-cols-1 gap-4 p-5">
        {rooms
          ? rooms.map((room) => {
              return (
                <div
                  className="bg-[#fff] grid grid-cols-3"
                  key={room._id}>
                  <img
                    src={room.picture}
                    alt="rooms"
                    width="100%"
                    height={180}
                    className="col-span-1"
                  />
                  <div className="col-span-2 p-8 font-semibold text-lg">
                    <p>Room Number : {room.room_num}</p>
                    <p>Type : {room.type}</p>
                    <p>Price : $ {room.price}</p>
                    <p>Description : {room.description}</p>
                    <p className="flex">
                      Bed Size :
                      {room["beds"].map((bed) => (
                        <p key={bed._id} className="ml-2">
                          {bed.type} ,
                        </p>
                      ))}
                    </p>
                    <p className="flex flex-wrap">
                      Amenitites :
                      {room["amenities"].map((ameni, index) => (
                        <p key={index} className="ml-2">
                          {ameni} ,
                        </p>
                      ))}
                    </p>
                    <Button
                      variant="contained"
                      sx={{
                        width: "160px",
                        height: "42px",
                        borderRadius: "4px",
                      }}>
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        width: "160px",
                        height: "42px",
                        borderRadius: "4px",
                        marginLeft: "10px",
                      }}>
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </Dash>
  );
};
