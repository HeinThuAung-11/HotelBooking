import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  apiGetBookingByUserId,
  apiUpdateBooking,
  selectUser,
} from "../features/authSlice";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditBookiing({ booking }) {
  console.log("booking from editbookiong", booking);
  const roomId = booking.room._id;
  const price = booking.room.price;
  const bookingId = booking._id;
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectionRange, setSelectionRange] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [days, setDays] = React.useState("");

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  React.useEffect(() => {
    const timeDifference =
      selectionRange.endDate.getTime() -
      selectionRange.startDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    setDays(daysDifference);
  }, [selectionRange]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let booking = {
      bookingId: bookingId,
      num_guests: data.guest,
      room: roomId,
      check_in: selectionRange.startDate,
      check_out: selectionRange.endDate,
      total_price: Math.round(days * price),
    };
    console.log("Bookingdata", booking);
    await dispatch(apiUpdateBooking(booking));
    dispatch(apiGetBookingByUserId(user?._id));
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        className="w-[165px] h-[40px]"
        sx={{
          color: "#ffffff", // Text color
          borderColor: "#14274A", // Updated border color
          backgroundColor: "#14274A", // Background color
          "&:hover": {
            backgroundColor: "#0F1E3B", // Darker background color on hover
          },
        }}>
        Edit Booking
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center" }}>
            Book A Room
          </Typography>
          <button
            className="w-12 h-12 right-0 absolute top-2"
            onClick={() => setOpen(false)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            </div>
            <div className="col-span-1">
              <FormControl
                variant="outlined"
                error={!!errors.Guest}
                className="w-full">
                <label htmlFor="outlined-adornment-Guest">
                  Number of Guest
                </label>
                <OutlinedInput
                  id="outlined-adornment-Guest"
                  {...register("guest", {
                    required: "Guest is required",
                  })}
                  startAdornment={
                    <InputAdornment position="start"></InputAdornment>
                  }
                  label="Guest"
                  type="number"
                  inputProps={{ min: "1", max: "3" }}
                />
              </FormControl>
            </div>
            <div className="col-span-1">
              <FormControl
                variant="outlined"
                error={!!errors.Price}
                className="w-full">
                <label htmlFor="outlined-adornment-Price">
                  Total Price
                </label>
                <OutlinedInput
                  id="outlined-adornment-Price"
                  startAdornment={
                    <InputAdornment position="start">
                      $
                    </InputAdornment>
                  }
                  label="Price"
                  type="number"
                  value={Math.round(days * price)}
                  disabled
                />
              </FormControl>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3">
            <Button
              variant="contained"
              style={{ backgroundColor: "#14274A", width: 200 }}
              onClick={(e) => {
                e.preventDefault(); // Prevent the default form submission
                handleSubmit(onSubmit)(); // Call the form submission handler
                setOpen(false); // Close the modal
              }}>
              Edit Booking
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
