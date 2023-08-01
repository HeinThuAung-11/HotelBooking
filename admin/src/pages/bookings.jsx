import { Dash } from "../components/dash";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchBooking,
  getAllBookings,
} from "../features/bookingSlice";
import { Display } from "../components/display";

export const Bookings = () => {
  const dispatch = useAppDispatch();
  const bookings = useAppSelector(getAllBookings);
  useEffect(() => {
    dispatch(fetchBooking());
  }, [dispatch]);
  const modifiedBookings = bookings.map((booking) => {
    const { check_in, check_out, room, user } = booking;
    return {
      check_in,
      check_out,
      room_num: room?.room_num || "N/A",
      roomType: room?.type || "N/A",
      firstName: user?.firstName || "N/A",
      lastName: user?.lastName || "N/A",
      email: user?.email || "N/A",
    };
  });
  const columns = [
    { id: "firstName", label: "First Name", minWidth: 100 },
    { id: "lastName", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 200 },
    {
      id: "room_num",
      label: "Room Number",
      minWidth: 100,
    },
    {
      id: "roomType",
      label: "Room Type",
      minWidth: 170,
    },
    {
      id: "check_in",
      label: "Check-in Time",
      minWidth: 100,
    },
    {
      id: "check_out",
      label: "Check-out Time",
      minWidth: 100,
    },
  ];
  return (
    <Dash>
      <Display columns={columns} rows={modifiedBookings} />
    </Dash>
  );
};
