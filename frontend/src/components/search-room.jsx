import * as React from "react";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm } from "react-hook-form";

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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="w-[300px] h-[700px] bg-background 
      flex flex-col items-center justify-evenly
      border-2 border-[#491098] rounded fixed">
      <div>
        <FormControl variant="standard" className="w-[215px]">
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
        <FormControl variant="outlined" error={!!errors.amount}>
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
        <FormControl variant="outlined" error={!!errors.people}>
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
      <Button
        variant="outlined"
        onClick={handleSubmit(onSubmit)}
        className="w-[215px]"
        sx={{
          color: "#ffffff", // Text color
          borderColor: "#491098", // Border color
          backgroundColor: "#491098", // Background color
          "&:hover": {
            backgroundColor: "#330961", // Background color on hover
          },
        }}>
        Search Rooms
      </Button>
    </div>
  );
};
