import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import FormHelperText from "@mui/material/FormHelperText";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  apiLogin,
  apiRegister,
  selectAuth,
} from "../features/authSlice";
import { useEffect } from "react";
import backgroundImage from "./../images/background.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export const Register = () => {
  const dispatch = useAppDispatch();
  const { status, token } = useAppSelector(selectAuth);
  let navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password === data.confirmPassword) {
      dispatch(apiRegister(data));
    } else {
      setError("Passwords are not the same");
    }
  };
  useEffect(() => {
    console.log("token", token);
    if (token) {
      navigate("/room-display");
    }
  });
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          filter: "blur(10px)",
        }}
      />
      <Box sx={style}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center" }}>
          Register User Account
        </Typography>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <FormControl
              variant="outlined"
              error={!!errors.firstName}
              className="w-full">
              <label htmlFor="outlined-adornment-Firstname">
                Firstname
              </label>
              <OutlinedInput
                id="outlined-adornment-Firstname"
                {...register("firstName", {
                  required: "Firstname is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Firstname"
                type="text"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.firstName?.message}
              </FormHelperText>
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl
              variant="outlined"
              error={!!errors.lastName}
              className="w-full">
              <label htmlFor="outlined-adornment-Lastname">
                Lastname
              </label>
              <OutlinedInput
                id="outlined-adornment-Lastname"
                {...register("lastName", {
                  required: "Lastname is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Lastname"
                type="text"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.lastName?.message}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="col-span-2">
            <FormControl
              variant="outlined"
              error={!!errors.email}
              className="w-full">
              <label htmlFor="outlined-adornment-Email">Email</label>
              <OutlinedInput
                id="outlined-adornment-Email"
                {...register("email", {
                  required: "Email is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Email"
                type="email"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.email?.message}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="col-span-1">
            <FormControl
              variant="outlined"
              error={!!errors.phoneNumber}
              className="w-full">
              <label htmlFor="outlined-adornment-PhoneNumber">
                PhoneNumber
              </label>
              <OutlinedInput
                id="outlined-adornment-PhoneNumber"
                {...register("phoneNumber", {
                  required: "PhoneNumber is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="PhoneNumber"
                type="text"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.phoneNumber?.message}
              </FormHelperText>
            </FormControl>
          </div>
          <div className="col-span-1">
            <FormControl
              variant="outlined"
              error={!!errors.address}
              className="w-full">
              <label htmlFor="outlined-adornment-Address">
                Address
              </label>
              <OutlinedInput
                id="outlined-adornment-Address"
                {...register("address", {
                  required: "Address is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Address"
                type="text"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.address?.message}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="col-span-2">
            <FormControl
              variant="outlined"
              error={!!errors.password}
              className="w-full">
              <label htmlFor="outlined-adornment-password">
                Password
              </label>
              <OutlinedInput
                id="outlined-adornment-password"
                {...register("password", {
                  required: "Password is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Password"
                type="password"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.password?.message}
              </FormHelperText>
            </FormControl>
          </div>

          <div className="col-span-2">
            <FormControl
              variant="outlined"
              error={!!errors.confirmPassword}
              className="w-full">
              <label htmlFor="outlined-adornment-confirmPassword">
                Confirm Password
              </label>
              <OutlinedInput
                id="outlined-adornment-confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Confirm Password"
                type="password"
              />
              <FormHelperText sx={{ color: "#f44336" }}>
                {errors.confirmPassword?.message}
              </FormHelperText>
            </FormControl>
          </div>
        </div>
        {error ? (
          <FormHelperText sx={{ color: "#f44336" }}>
            {error}
          </FormHelperText>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}>
          <Button
            variant="outlined"
            onClick={handleSubmit(onSubmit)}
            className="w-[400px]"
            sx={{
              color: "#ffffff",
              borderColor: "#1976D2",
              backgroundColor: "#1976D2",
              "&:hover": {
                backgroundColor: "#1565C0",
              },
            }}>
            Register
          </Button>
        </div>
        {status && status === "error" && (
          <Typography variant="body1" color="error">
            Account already exists.
          </Typography>
        )}
      </Box>
    </div>
  );
};
