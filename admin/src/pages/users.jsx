import { Dash } from "../components/dash";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUser, getAllUsers } from "../features/user/userSlice";
import { Display } from "../components/display";

export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getAllUsers);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  console.log("users", users);

  const columns = [
    { id: "firstName", label: "First Name", minWidth: 100 },
    { id: "lastName", label: "Last Name", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 200 },
    {
      id: "phoneNumber",
      label: "Phone Number",
      minWidth: 100,
    },
    {
      id: "address",
      label: "Address",
      minWidth: 170,
    },
    {
      id: "createdAt",
      label: "Created At",
      minWidth: 100,
    },
  ];

  return (
    <Dash>
      <Display columns={columns} rows={users} />
    </Dash>
  );
};
