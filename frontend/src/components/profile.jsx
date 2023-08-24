import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  apiDeleteBooking,
  apiGetBookingByUserId,
  selectBooking,
} from "../features/authSlice";
import { getBookingByUserId } from "../features/authApi";
import EditBookiing from "./editbooking";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ booking }) {
  return <EditBookiing booking={booking} />;
}

export default function ProfileModal({ open, handleClose, userId }) {
  const bookings = useAppSelector(selectBooking);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    console.log("usereffect", userId);
    dispatch(apiGetBookingByUserId(userId));
  }, [dispatch, userId]);
  const dataFormat = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toISOString().split("T")[0];
  };
  const handleDelete = async (id) => {
    console.log("hanlde delete", id);
    await dispatch(apiDeleteBooking(id));
    dispatch(apiGetBookingByUserId(userId));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400 }}>
          {bookings && bookings.length > 0 ? (
            <h2
              id="parent-modal-title"
              className="text-center text-lg font-bold">
              Booking Status
            </h2>
          ) : (
            <h2
              id="parent-modal-title"
              className="text-center text-lg font-bold">
              No Booking
            </h2>
          )}

          {bookings
            ? bookings.map((booking) => {
                return (
                  <div key={booking._id}>
                    <div className="flex">
                      <h5 className="text-md font-semibold">
                        Room Type :{" "}
                      </h5>
                      <h5 className="text-md font-semibold">
                        {booking.room.type}
                      </h5>
                    </div>
                    <div className="flex">
                      <h5 className="text-md font-semibold">
                        Room Number :{" "}
                      </h5>
                      <h5 className="text-md font-semibold">
                        {" "}
                        {booking.room.room_num}
                      </h5>
                    </div>
                    <div className="flex">
                      <h5 className="text-md font-semibold">
                        Total Price :{" "}
                      </h5>
                      <h5 className="text-md font-semibold">
                        {" "}
                        {booking.total_price}
                      </h5>
                    </div>
                    <div className="flex">
                      <h5 className="text-md font-semibold">
                        Check In:{" "}
                      </h5>
                      <h5 className="text-md font-semibold">
                        {dataFormat(booking.check_in)}
                      </h5>
                    </div>
                    <div className="flex">
                      <h5 className="text-md font-semibold">
                        Check Out :{" "}
                      </h5>
                      <h5 className="text-md font-semibold">
                        {" "}
                        {dataFormat(booking.check_out)}
                      </h5>
                    </div>
                    <div className="flex mt-3">
                      <ChildModal booking={booking} />
                      <Button
                        variant="outlined"
                        className="w-[175px] h-[40px]"
                        onClick={() => handleDelete(booking._id)}
                        sx={{
                          color: "#ffffff", // Text color
                          borderColor: "#D9534F", // Red border color
                          backgroundColor: "#D9534F", // Red background color
                          "&:hover": {
                            backgroundColor: "#C9302C", // Darker red background color on hover
                          },
                          marginLeft: "10px",
                        }}>
                        Cancel Booking
                      </Button>
                    </div>
                  </div>
                );
              })
            : null}
        </Box>
      </Modal>
    </div>
  );
}
