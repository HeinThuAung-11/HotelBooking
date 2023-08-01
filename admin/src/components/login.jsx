import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
export const Login = () => {
  const { handleSubmit, register } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-[400px] h-[300px] bg-white rounded-lg p-6 flex flex-col justify-around items-center">
      <p className="font-bold text-2xl">Login To Admin Dashboard</p>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        {...register("email")}
        className="w-full"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        {...register("password")}
        className="w-full"
      />
      <Button
        variant="outlined"
        onClick={handleSubmit(onSubmit)}
        className="w-full"
        sx={{
          color: "#ffffff", // Text color
          borderColor: "#491098", // Border color
          backgroundColor: "#491098", // Background color
          "&:hover": {
            backgroundColor: "#330961", // Background color on hover
          },
        }}>
        Login
      </Button>
    </div>
  );
};
