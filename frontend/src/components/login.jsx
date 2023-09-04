import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { apiLogin, selectAuth } from "../features/authSlice";
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
export const Login = () => {
  const dispatch = useAppDispatch();
  let { token, status } = useSelector(selectAuth);
  let navigate = useNavigate();
  useEffect(() => {
    console.log("token", token);
    if (token) {
      navigate("/room-display");
    }
  });
  console.log("status", status);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(apiLogin(data));
  };
  const navigateRegister = () => {
    navigate("/register");
  };
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
          Login To User Account
        </Typography>

        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <FormControl
              variant="outlined"
              error={!!errors.Email}
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
            </FormControl>
          </div>

          <div className="col-span-1">
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
                  required: "password is required",
                })}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Password"
                type="password"
              />
            </FormControl>
          </div>
        </div>
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
              color: "#ffffff", // Text color
              borderColor: "#4CAF50", // Green border color
              backgroundColor: "#4CAF50", // Green background color
              "&:hover": {
                backgroundColor: "#45a049", // Darker green background color on hover
              },
            }}>
            Login
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}>
          <Button
            variant="outlined"
            onClick={navigateRegister}
            className="w-[400px]"
            sx={{
              color: "#ffffff", // Text color
              borderColor: "#1976D2", // Blue border color
              backgroundColor: "#1976D2", // Blue background color
              "&:hover": {
                backgroundColor: "#1565C0", // Darker blue background color on hover
              },
            }}>
            Register
          </Button>
        </div>
        {status && status === "error" && (
          <Typography variant="body1" color="error">
            Incorrect email or password. Please try again.
          </Typography>
        )}
      </Box>
    </div>
  );
};
