import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm, useFieldArray } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useState } from "react";
// FIREBASE
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAppDispatch } from "../app/hooks";
import { fetchRoom, updateRoom } from "../features/room/roomSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "700",
  height: "80%",
  bgcolor: "background.paper",
  borderRadius: 4,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export function EditModal({ room }) {
  const [image, setImage] = useState(null);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    _id,
    room_num,
    type,
    description,
    picture,
    capacity,
    price,
    beds,
    amenities,
  } = room;
  let amenitiesModified = amenities.map((ameni) => ({ name: ameni }));
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      beds: beds,
      amenities: amenitiesModified,
      type: type,
      room_num: room_num,
      price: price,
      capacity: capacity,
      description: description,
    },
  });
  const {
    fields: bedFields,
    append: appendBed,
    remove: removeBed,
  } = useFieldArray({
    control,
    name: "beds",
  });
  const {
    fields: amenitiesFields,
    append: appendAmenities,
    remove: removeAmenities,
  } = useFieldArray({
    control,
    name: "amenities",
  });
  const onSubmit = async (data) => {
    console.log("Edit data", data, picture);
    const amenities = data.amenities;
    const amenitiesArray = amenities.map((item) => item.name);
    const date = new Date();

    if (image) {
      try {
        const imageRef = ref(
          storage,
          `/images/${image.name + date.getTime()}`
        );
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);

        const updatedData = {
          ...data,
          picture: url,
          room_num: parseInt(data.room_num),
          amenities: amenitiesArray,
          _id,
        };

        console.log(updatedData);
        await dispatch(updateRoom(updatedData));
        handleClose(false);
        dispatch(fetchRoom());
      } catch (error) {
        console.log(error.message, "error getting the image url");
      }
    } else {
      let updatedData = {
        ...data,
        picture,
        room_num: parseInt(data.room_num),
        amenities: amenitiesArray,
        _id,
      };
      console.log("Updated data else", updatedData, _id);
      await dispatch(updateRoom(updatedData));
      handleClose(false);
      dispatch(fetchRoom());
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          width: "160px",
          height: "42px",
          borderRadius: "4px",
        }}>
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: "center" }}>
              Edit Room
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
              <div className="col-span-1">
                <FormControl
                  variant="outlined"
                  error={!!errors.type}
                  className="w-full">
                  <label htmlFor="outlined-adornment-type">
                    Type
                  </label>
                  <OutlinedInput
                    id="outlined-adornment-type"
                    {...register("type", {
                      required: "Type is required",
                    })}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Type"
                  />
                  <FormHelperText>
                    {errors.type?.message}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="col-span-1">
                <FormControl
                  variant="outlined"
                  error={!!errors.room_num}
                  className="w-full">
                  <label htmlFor="outlined-adornment-room_num">
                    Room Number
                  </label>
                  <OutlinedInput
                    id="outlined-adornment-room_num"
                    {...register(
                      "room_num",

                      {
                        required: "Room Number is required",
                      }
                    )}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Room Number"
                  />
                  <FormHelperText>
                    {errors.room_num?.message}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="col-span-1">
                <FormControl
                  variant="outlined"
                  error={!!errors.price}
                  className="w-full">
                  <label htmlFor="outlined-adornment-price">
                    Price
                  </label>
                  <OutlinedInput
                    id="outlined-adornment-price"
                    {...register(
                      "price",

                      {
                        required: "Price is required",
                      }
                    )}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Price"
                  />
                  <FormHelperText>
                    {errors.price?.message}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="col-span-1">
                <FormControl
                  variant="outlined"
                  error={!!errors.capacity}
                  className="w-full">
                  <label htmlFor="outlined-adornment-capacity">
                    Capacity
                  </label>
                  <OutlinedInput
                    id="outlined-adornment-capacity"
                    {...register(
                      "capacity",

                      {
                        required: "Capacity is required",
                      }
                    )}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    label="Capacity"
                  />
                  <FormHelperText>
                    {errors.capacity?.message}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="col-span-2">
                <FormControl
                  variant="outlined"
                  error={!!errors.description}
                  className="w-full">
                  <TextField
                    id="outlined-adornment-description"
                    {...register(
                      "description",

                      {
                        required: "Description is required",
                      }
                    )}
                    label="Description"
                    multiline
                    placeholder="Description of the Room"
                  />
                  <FormHelperText>
                    {errors.description?.message}
                  </FormHelperText>
                </FormControl>
              </div>
              <label className="block text-base font-semibold text-black">
                Image of the Room
              </label>
              <input
                accept="image/*"
                type="file"
                id="room-image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div className="col-span-2">
                <label className="block text-base font-semibold text-black">
                  Beds
                </label>
                {bedFields.map((bed, index) => (
                  <div
                    className="box grid grid-cols-12 gap-4"
                    key={bed.id}>
                    <div className="col-span-4">
                      <input
                        placeholder="Enter Bed Type"
                        className="pl-2 mt-1 w-full h-[55px] rounded-md border bg-white text-sm text-gray-700 shadow-sm"
                        {...register(`beds.${index}.type`)}
                      />
                    </div>
                    <div className="col-span-4">
                      <input
                        placeholder="Enter Count"
                        className="pl-2 mt-1 w-full h-[55px] rounded-md border bg-white text-sm text-gray-700 shadow-sm"
                        {...register(`beds.${index}.count`)}
                      />
                    </div>
                    <div className="btn-box col-span-4 grid grid-cols-4 gap-2">
                      {bedFields.length == 1 ? (
                        <button
                          disabled
                          className="col-span-2 mt-1 inline-block rounded border border-red-600 w-[100px] h-[55px] text-sm font-medium text-red-600 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 text-center"
                          onClick={() => removeBed(index)}>
                          Remove
                        </button>
                      ) : (
                        <button
                          className="col-span-2 mt-1 inline-block rounded border border-red-600 w-[100px] h-[55px] text-sm font-medium text-red-600 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 text-center"
                          onClick={() => removeBed(index)}>
                          Remove
                        </button>
                      )}
                      {bedFields.length - 1 === index && (
                        <button
                          className="col-span-2 mt-1 inline-block rounded border border-green-600 w-[100px] h-[55px] text-sm font-medium text-green-600 hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 text-center"
                          onClick={() =>
                            appendBed({
                              type: "",
                              count: "",
                            })
                          }>
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-2">
                <label className="block text-base font-semibold text-black">
                  Amenitites
                </label>
                {amenitiesFields.map((amenities, index) => (
                  <div
                    className="box grid grid-cols-12 gap-4"
                    key={amenities.id}>
                    <div className="col-span-8">
                      <input
                        placeholder="Enter Amenitie"
                        className="pl-2 mt-1 w-full h-[55px] rounded-md border bg-white text-sm text-gray-700 shadow-sm"
                        {...register(`amenities.${index}.name`)}
                      />
                    </div>

                    <div className="btn-box col-span-4 grid grid-cols-4 gap-2">
                      {amenitiesFields.length == 1 ? (
                        <button
                          disabled
                          className="col-span-2 mt-1 inline-block rounded border border-red-600 w-[100px] h-[55px] text-sm font-medium text-red-600 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 text-center"
                          onClick={() => removeAmenities(index)}>
                          Remove
                        </button>
                      ) : (
                        <button
                          className="col-span-2 mt-1 inline-block rounded border border-red-600 w-[100px] h-[55px] text-sm font-medium text-red-600 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 text-center"
                          onClick={() => removeAmenities(index)}>
                          Remove
                        </button>
                      )}
                      {amenitiesFields.length - 1 === index && (
                        <button
                          className="col-span-2 mt-1 inline-block rounded border border-green-600 w-[100px] h-[55px] text-sm font-medium text-green-600 hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 text-center"
                          onClick={() =>
                            appendAmenities({ name: "" })
                          }>
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                ))}
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
                Edit Room
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
