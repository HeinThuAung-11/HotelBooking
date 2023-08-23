import * as React from "react";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm } from "react-hook-form";

import {
  filteringRooms,
  getAllRooms,
  getFilteredRooms,
  cancelFilteredRooms,
} from "../features/roomSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const roomType = [
  "Standard Room",
  "Deluxe Room",
  "Family Room",
  "Executive Suite",
  "Penthouse Suite",
  "Junior Suite",
  "Honeymoon Suite",
  "Presidential Suite",
];

export const Searchroom = () => {
  const rooms = useAppSelector(getAllRooms);
  const dispatch = useAppDispatch();
  const filteredRooms = useAppSelector(getFilteredRooms);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data, rooms[0]);
    const filterdRoom = rooms.filter((room) => {
      return (
        room.type === data.RoomType &&
        room.price <= data.amount &&
        rooms[0].capacity === parseInt(data.people)
      );
    });
    console.log("filter", filterdRoom);
    dispatch(filteringRooms(filterdRoom));
  };
  console.log("Search filted rooms", filteredRooms);
  return (
    <div
      className="w-[1000px] h-[120px] bg-background 
      flex items-center justify-evenly
      border-2 border-[#491098] rounded-lg ">
      <div>
        <FormControl
          variant="standard"
          className="w-[215px] h-[100px]">
          <label htmlFor="uncontrolled-native">RoomType</label>
          <NativeSelect
            defaultValue={null}
            {...register("RoomType")}
            label={"Room Type"}
            inputProps={{
              name: "RoomType",
              id: "uncontrolled-native",
            }}>
            {roomType.map((room, index) => {
              return (
                <option value={room} key={room + index}>
                  {room}
                </option>
              );
            })}
          </NativeSelect>
          <FormHelperText error={!!errors.RoomType}>
            {errors.RoomType?.message}
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl
          variant="outlined"
          error={!!errors.amount}
          className="h-[100px]">
          <label htmlFor="outlined-adornment-amount">Amount</label>
          <OutlinedInput
            id="outlined-adornment-amount"
            {...register("amount", {
              required: "Amount is required",
            })}
            startAdornment={
              <InputAdornment position="start">$</InputAdornment>
            }
            label="Amount"
          />
          <FormHelperText>{errors.amount?.message}</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl
          variant="outlined"
          error={!!errors.people}
          className="h-[100px]">
          <label htmlFor="outlined-adornment-people">People</label>
          <OutlinedInput
            id="outlined-adornment-people"
            {...register("people", {
              required: "People is required",
            })}
            startAdornment={
              <InputAdornment position="start"></InputAdornment>
            }
            label="People"
          />
          <FormHelperText>{errors.people?.message}</FormHelperText>
        </FormControl>
      </div>
      {filteredRooms.length > 0 ? (
        <Button
          variant="outlined"
          onClick={() => dispatch(cancelFilteredRooms())}
          className="w-[215px] h-[50px]"
          sx={{
            color: "#ffffff", // Text color
            borderColor: "#14274A", // Updated border color
            backgroundColor: "#14274A", // Background color
            "&:hover": {
              backgroundColor: "#0F1E3B", // Darker background color on hover
            },
          }}>
          Cancel Filtering
        </Button>
      ) : (
        <Button
          variant="outlined"
          onClick={handleSubmit(onSubmit)}
          className="w-[215px] h-[50px]"
          sx={{
            color: "#ffffff", // Text color
            borderColor: "#14274A", // Updated border color
            backgroundColor: "#14274A", // Background color
            "&:hover": {
              backgroundColor: "#0F1E3B", // Darker background color on hover
            },
          }}>
          Search Rooms
        </Button>
      )}
    </div>
  );
};
